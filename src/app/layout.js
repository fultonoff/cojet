'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head';




export default function RootLayout({ children }) {
  return (
      
    <html lang="en" >
        <title>COJET</title>
      
      <body className='scrollbar scrollbar-thin scrollbar-thumb-gold scrollbar-track-white'>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
        
  )
}
