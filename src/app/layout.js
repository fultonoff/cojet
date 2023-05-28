import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Cojet',
  description:
    'Simple and cost effective A to B',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
       <Head>
        <title>My page title</title>
      </Head>
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
