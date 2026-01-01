"use client"
import { useEffect, useState } from "react"

const texts = [
  "Frontend Developer",
  "React Developer",
  "Next Developer",
  "Yasir Arafat Alif",
]

export default function TypewriterText() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    let timeout

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 80)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 50)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 3000)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setIndex((index + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index])

  return (
    <span className="text-primary font-semibold">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}
