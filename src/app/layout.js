import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
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
      <GoogleTagManager gtmId="G-N0H49M48DF" />
      <GoogleAnalytics gtmId="G-N0H49M48DF"/>
    </html>
  )
}
