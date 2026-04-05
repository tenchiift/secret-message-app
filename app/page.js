import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-transparent px-4 text-center pt-60">
     <h1 style={{ 
      fontFamily: "'Climate Crisis', cursive", color: '#f87b06bd' }} className="text-6xl font-bold mb-4">
    Send a secret message 🤫
    </h1>
      
      <p className="text-[#f87b06] text-lg mb-10 max-w-md ">
        Anonymous messages.<br />No names. No traces. Just words ! .
      </p>

      <div className="flex gap-4">
        <Link href="/send" className="bg-gray-800 text-white rounded-xl px-6 py-3 text-sm font-medium hover:bg-gray-700 transition">
          Send a message →
        </Link>
        <Link href="/search" className="bg-white text-gray-700 border border-gray-200 rounded-xl px-6 py-3 text-sm font-medium hover:bg-gray-100 transition">
          Check my name !
        </Link>
      </div>
    </main>
  )
}