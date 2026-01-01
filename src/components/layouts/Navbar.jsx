"use client"
import React, { useState, useEffect, useLayoutEffect } from "react"
import { FaCode } from "react-icons/fa6"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { MdDarkMode, MdLightMode } from "react-icons/md"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  // Start with a stable server-safe initial theme to avoid hydration mismatch
  const [theme, setTheme] = useState("light")

  // On client mount determine actual theme (localStorage or system) and apply it
  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial = stored || (prefersDark ? "dark" : "light")
    if (initial !== theme) setTheme(initial)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  // Keep in sync with system preference when user hasn't explicitly chosen a theme
  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light")
      }
    }
    if (mq.addEventListener) mq.addEventListener("change", handleChange)
    else mq.addListener(handleChange)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handleChange)
      else mq.removeListener(handleChange)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  const menuItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-transparent backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xl font-bold text-primary"
          >
            <FaCode className="text-primary dark:text-white" />
            Yasir
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-400 hover:text-white transition
                           relative after:absolute after:left-0 after:-bottom-1 after:h-0.5
                           after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.name}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-xl text-gray-300 hover:text-white transition"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-xl text-white">
              {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
            </button>

            <button
              onClick={() => setOpen(true)}
              className="text-white text-2xl"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-[#0b0f19] border-l border-white/10
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-white text-xl">
            <HiX />
          </button>
        </div>

        <div className="flex flex-col p-5 gap-5">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-gray-400 hover:text-white transition text-sm"
            >
              {item.name}
            </button>
          ))}
        </div>
      </aside>
    </>
  )
}

export default Navbar
