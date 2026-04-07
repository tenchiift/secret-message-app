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
      <main className="min-h-screen flex items-center justify-center">
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
  // main wrapper
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <span style={{ fontFamily: 'Climate Crisis, sans-serif', color: '#f87b06bd', fontSize: '2.5rem' }}>
      Send your message !
      </span>
      <span style={{ fontFamily: 'Climate Crisis, sans-serif', color: '#f87b06bd', fontSize: '1rem' }}>
      They'll never know who sent it.
      <br /> 
      
      </span>
      <br />

      {/* this is where the box starts */}
      <div className="bg-black  rounded-4xl p-16 max-w-4xl w-full shadow-sm">
        <div className="flex flex-col gap-4">
          <div>
            {/* this is the parrent} */}
            {/* label goes here */}
            <label 
            htmlFor="recipient"
            style={{ fontFamily: 'Poppins, sans-serif' }} 
            className="text-sm text-gray-200 mb-1 block text-left"
            >Who is this for?
            </label>

            {/* input field goes here */}
            <input
              style={{ fontFamily: 'Poppins, sans-serif' }}
              type="text"
              placeholder="e.g. husna"
              value={recipient}
              onChange={e => setRecipient(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400 text-gray-800 bg-white"
            />
          </div>

          <div>
            <label 
            style={{ fontFamily: 'Poppins, sans-serif' }} 
            className="text-sm text-gray-200 mb-1 block"
            htmlFor="message"
            >Your message
            </label>
            
            <textarea
              style={{ fontFamily: 'Poppins, sans-serif' }}
              placeholder="Write something nice (or spicy ?)..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-gray-400 text-gray-800 bg-white resize-none"
            />
          </div>

          {/* send button */}
          <button
            style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={handleSend}
            disabled={loading}
            className="bg-gray-800 text-white rounded-xl py-3 text-sm font-medium hover:bg-gray-700 transition disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send anonymously →'}
          </button>
          
          {/* check your name button */}
          <a 
          style={{ fontFamily: 'Poppins, sans-serif' }} 
          href="/search" className="text-center text-sm text-gray-400 underline hover:text-gray-600">
          Check your name !
          </a>

        </div>
      </div>
    </main>
  )
}