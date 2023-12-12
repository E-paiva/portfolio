
import '@/styles/globals.css'
import Head from 'next/head'




export const metadata = {
  title: 'Evellyn Paiva',
  description: 'Portfolio Evellyn Paiva',
}

export default function RootLayout({ children }) {

  return (
    <html >
      <header>
   
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="icon" type="image/x-icon" href="./icons/favicon.ico"/>
 </header>
      <body >{children}</body>
    </html>
  )
}
