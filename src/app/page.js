"use client";

import Head from "next/head";
import Hiro from "@/components/Hiro";
import Book from "@/components/Book";
import About from "@/components/About";
import Route from "@/components/Route";
import History from "@/components/History";
import Whyus from "@/components/Whyus";
import Feature from "@/components/Feature";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import AppComponent from "@/components/AppComponent";
import Whatsapp from "@/components/Whatsapp";
import metadata from '../../metadata.jsx'
import News from '@/components/News';



export default function Home() {
  return (
      
      
    <div>
      <title>{metadata.title}</title>
        <meta name="description" content={metadata.openGraph.description} />
        <meta name="keywords" content={metadata.openGraph.keywords.join(', ')} />
    <main>
      <Hiro />
      <Book />
      <About/>
      <AppComponent/>
      <Route/>
      <History/>
      <Whyus/>
      <Feature />
      <Team/>
      <News />
      <Contact/>
      <Whatsapp/>
    </main>
    </div>
    
  );
}
