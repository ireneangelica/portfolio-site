"use client"

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = 'ireneangelica23@gmail.com'

  const copyEmail = () => {
    // Inside copyEmail function
    if (!navigator.clipboard) {
        window.location.href = `mailto:${email}`
        return
    }
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-100 to-pink-200 p-6 border border-pink-200">
      <h2 className="text-2xl font-mono mb-4 text-pink-700">Contact</h2>
      <p className="text-gray-800 mb-4">
        I'd love to hear from you! Click to copy my email:
      </p>
      
      <button
        onClick={copyEmail}
        className="group relative inline-flex items-center gap-2 bg-white/90 text-pink-600 px-4 py-2 rounded-md border border-pink-300 hover:bg-white transition-all duration-200 overflow-hidden"
      >
        <span className={`transition-opacity ${copied ? 'opacity-0' : 'opacity-100'}`}>
          {email}
        </span>
        
        {/* "Copied!" feedback */}
        <span 
          className={`absolute inset-0 flex items-center justify-center gap-1 bg-pink-100 text-pink-700 transition-transform ${copied ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <Check className="w-4 h-4" />
          Copied!
        </span>
        
        {/* Copy icon that appears on hover */}
        <span className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Copy className="w-4 h-4 text-pink-500" />
        </span>
      </button>
      
      {/* Alternative mailto link option
      <p className="mt-3 text-sm text-gray-600">
        Or <a href={`mailto:${email}`} className="text-pink-600 hover:underline">send me an email directly</a>
      </p> */}
    </section>
  )
}