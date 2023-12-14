
import '@/styles/globals.css'
import Head from 'next/head'




export const metadata = {
  title: 'Evellyn Paiva',
  description: 'Portfolio Evellyn Paiva',
}

export default function RootLayout({ children }) {

  return (
    <html >
      
      <body >{children}</body>
    </html>
  )
}
