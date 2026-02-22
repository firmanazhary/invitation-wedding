import React, { useState, useRef } from 'react';
import { useSearchParams, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import komponen
import Curtain from './components/Curtain';
import Butterfly from './components/Butterfly';
import Countdown from './components/Countdown';
import GuestBook from './components/GuestBook';
import FlowerDecoration from './components/FlowerDecoration';
import { DATA_PENGANTIN } from './constans/content';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Verse from './components/Verse';
import Mempelai from './components/Mempelai';
import SaveTheDate from './components/SaveTheDate';
import Adab from './components/Adab';
import LoveStory from './components/LoveStory';
import Doa from './components/Doa';
import Closing from './components/Closing';
import Footer from './components/Footer';
import Nasehat from './components/Nasehat';

// Import MusicPlayer yang baru dibuat
import MusicPlayer from './components/Nasyid'; 

function AppContent() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu Undangan';
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk buka undangan
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    /* Mengubah bg default ke biru muda agar seragam dengan semua komponen */
    <div className="relative overflow-x-hidden bg-[#E0F2FE]">
      
      {/* 1. Komponen MusicPlayer (Diletakkan di luar div isOpen agar posisinya fixed) */}
      <MusicPlayer isOpen={isOpen} />

      <AnimatePresence>
        {!isOpen && <Curtain guestName={guestName} onOpen={handleOpen} />}
      </AnimatePresence>
      
      {isOpen && (
        <div className="bg-[#E0F2FE]">
          <Navbar />
          <Butterfly />
          <FlowerDecoration />
          
          <main className="relative z-20">
            <Hero />
            <Verse />
            <Mempelai />
            <Countdown targetDate={DATA_PENGANTIN.acara.tanggal} />
            <LoveStory />
            <SaveTheDate />

            <section className="max-w-xl mx-auto py-8">
               <GuestBook guestName={guestName} />
            </section>
            
            <Adab />
            <Nasehat />
            <Doa />
            <Closing />
            <Footer />
          </main>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}