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




export default function Home() {
  return (
      
      
    <div>
      <Head>
        <title>My page title</title>
      </Head>
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
      <Contact/>
    </main>
    </div>
    
  );
}
