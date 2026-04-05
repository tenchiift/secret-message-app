'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function Inbox() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const name = params.name
  
useEffect(() => {
  async function fetchMessages() {
    console.log('fetching for:', name)
    
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('recipient', name.toLowerCase())
      .order('created_at', { ascending: false })

    console.log('data:', data)
    console.log('error:', error)

    if (!error) setMessages(data)
    setLoading(false)
  }

  if (name) fetchMessages()
}, [name])

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-medium text-gray-800 mb-1">
          Messages for {name} 💌
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          These are 100% anonymous. You'll never know who sent them.
        </p>

        {loading && (
          <p className="text-gray-400 text-sm">Loading...</p>
        )}

        {!loading && messages.length === 0 && (
          <div className="bg-white rounded-2xl p-8 text-center">
            <p className="text-gray-400 text-sm">No messages yet. Share your link!</p>
          </div>
        )}

        <div className="flex flex-col gap-4">
          {messages.map(msg => (
            <div key={msg.id} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-700 text-sm leading-relaxed">{msg.content}</p>
              <p className="text-gray-400 text-xs mt-4">
                {new Date(msg.created_at).toLocaleDateString('en-MY', {
                  year: 'numeric', month: 'short', day: 'numeric',
                  hour: '2-digit', minute: '2-digit'
                })}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/" className="text-sm text-gray-400 underline">
            Send an anonymous message
          </a>
        </div>
      </div>
    </main>
  )
}