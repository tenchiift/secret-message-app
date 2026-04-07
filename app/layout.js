import "./globals.css";
import ParticlesBackground from '@/components/Particles'

export const metadata = {
  title: "just4u",
  description: "Send anonymous messages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Climate Crisis Font */}
        <link
        href="https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap"
        rel="stylesheet"
        />
        {/* Poppins Font */}
        <link 
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

      </head>
      <body>
        <ParticlesBackground />
        {/* this is where the navbar goes */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 32px',
          backgroundColor: 'transparent',
          height: '64px', // this is the height of the navbar , make it fixed //
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,

          
        }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img src="/logo.png" alt="just4u logo" style={{ 
              height: '128px', 
              width: 'auto', 
              objectFit: 'contain', 
            }} />
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a href="/send" style={{ textDecoration: 'none', fontSize: '14px', color: '#f9f9f9', fontWeight: '500' }}>
              Send
            </a>
            <a href="/search" style={{ textDecoration: 'none', fontSize: '14px', color: '#f9f9f9', fontWeight: '500' }}>
              Browse
            </a>
            <a href="https://github.com/tenchiift/secret-message-app" target="_blank" style={{ textDecoration: 'none', fontSize: '14px', color: '#f9f9f9', fontWeight: '500' }}>
              GitHub
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}