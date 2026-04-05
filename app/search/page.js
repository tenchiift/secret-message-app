'use client'


import { useState } from 'react'

export default function Search() {
  const [name, setName] = useState('')

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full shadow-sm text-center">
        <h1 className="text-2xl font-medium text-gray-800 mb-1">Check your inbox 💌</h1>
        <p className="text-gray-400 text-sm mb-8">Enter your name to see your secret messages.</p>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your name..."
            onChange={e => setName(e.target.value)}
            className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400 text-gray-800 bg-white"
          />
          
            <a
            href={name.trim() ? `/inbox/${name.trim().toLowerCase()}` : '#'}
            className="bg-gray-800 text-white rounded-xl px-4 py-3 text-sm font-medium hover:bg-gray-700 transition"
          >
            Go →
          </a>
        </div>
      </div>
    </main>
  )
}