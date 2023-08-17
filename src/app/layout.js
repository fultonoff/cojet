'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head';
import metadata  from '../../metadata.jsx'
import Script from 'next/script'
import Lenis from '@studio-freight/lenis'




export default function RootLayout({ children }) {
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  return (
      
    <html lang="en" >
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.openGraph.description} />
        <meta name="keywords" content={metadata.openGraph.keywords.join(', ')} />
      
      <body className='scrollbar scrollbar-thin scrollbar-thumb-gold scrollbar-track-white '>
        <Nav/>
        {children}
        <Footer/>

        <script src="https://smtpjs.com/v3/smtp.js" defer></script>
        </body>
    </html>
        
  )
}

