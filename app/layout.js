import "./globals.css";

export const metadata = {
  title: "just4u",
  description: "Send anonymous messages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
        href="https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap"
        rel="stylesheet"
        />
      </head>
      <body>

        {/* this is where the navbar goes */}

        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 32px',
          backgroundColor: 'transparent',
          height: '64px', // this is the height of the navbar , make it fixed //
          position: 'sticky',
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