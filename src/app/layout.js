'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head';
import metadata  from '../../metadata.jsx'




export default function RootLayout({ children }) {
  return (
      
    <html lang="en" >
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.openGraph.description} />
        <meta name="keywords" content={metadata.openGraph.keywords.join(', ')} />
      
      <body className='scrollbar scrollbar-thin scrollbar-thumb-gold scrollbar-track-white '>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
        
  )
}

