import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-transparent px-4 text-center pt-60">
     <h1 style={{ 
      fontFamily: "'Climate Crisis', sans-serif",color: '#f87b06bd' }} className="text-6xl font-bold mb-4">
    Send Anonymously 🤫
    </h1>
      
      <p className="text-[#f87b06] text-lg mb-10 max-w-md ">
        <span style={{fontFamily: "Poppins, sans-serif"}}>
        No names. Just honesty. 
        </span>
      </p>

      <div className="flex gap-4">
        <Link href="/send" className="bg-gray-800 text-white rounded-xl px-6 py-3 text-sm font-medium hover:bg-gray-700 transition">
        
        <span style={{ fontFamily: "'Poppins', sans-serif" }}>
          Send a message →
        </span>
        </Link>

        <Link href="/search" className="bg-white text-gray-700 border border-gray-200 rounded-xl px-6 py-3 text-sm font-medium hover:bg-gray-100 transition">
        <span style={{ fontFamily: "'Poppins', sans-serif" }}>
          Check your name !
        </span>
        </Link>

      </div>
    </main>
  )
}