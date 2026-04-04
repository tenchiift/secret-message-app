'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [recipient, setRecipient] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSend() {
    if (!recipient.trim() || !message.trim()) return
    setLoading(true)

    const { error } = await supabase.from('messages').insert({
      recipient: recipient.toLowerCase().trim(),
      content: message.trim(),
    })

    if (!error) {
      setSent(true)
    }
    setLoading(false)
  }

  if (sent) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-sm">
          <div className="text-4xl mb-4">💌</div>
          <h2 className="text-xl font-medium text-gray-800 mb-2">Message sent!</h2>
          <p className="text-gray-500 text-sm mb-6">Your secret is safe. They'll never know it was you.</p>
          <button
            onClick={() => { setSent(false); setRecipient(''); setMessage('') }}
            className="text-sm text-gray-400 underline"
          >
            Send another
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full shadow-sm">
        <h1 className="text-2xl font-medium text-gray-800 mb-1">Send a secret message 🤫</h1>
        <p className="text-gray-400 text-sm mb-8">100% anonymous. They'll never know who sent it.</p>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Who is this for?</label>
            <input
              type="text"
              placeholder="e.g. sarah"
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400 text-gray-800 bg-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500 mb-1 block">Your message</label>
            <textarea
              placeholder="Write something nice (or spicy)..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400 resize-none"
            />
          </div>

          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-gray-800 text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-700 transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send anonymously →'}
          </button>
        </div>
      </div>
    </main>
  )
}