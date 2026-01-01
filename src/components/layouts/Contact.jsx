"use client"
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }
     return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-10">
      <div className="space-y-14">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-primary">Let's Work Together</h2>
          <p className="text-lg text-secondary max-w-2xl">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wide font-semibold text-primary">Email</h3>
              <a
                href="mailto:yasir@example.com"
                className="text-lg text-secondary hover:text-primary transition-colors font-medium"
              >
                yasirarafatalif1@gmail.com
              </a>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wide font-semibold text-primary">Location</h3>
              <p className="text-secondary">Faidabad,Uttara ,Dhaka , Bangladesh</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wide font-semibold text-primary">Social</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  GitHub →
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  LinkedIn →
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                  Twitter →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-secondary">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-card text-secondary placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-secondary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-card text-secondary placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-secondary">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-card text-secondary placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors"
                placeholder="Project inquiry"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-border rounded-lg bg-card text-secondary placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-80 transition-opacity"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
};

export default Contact;