import React, { useState, useRef } from 'react';
import { useSearchParams, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import semua komponen yang sudah dibuat
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
import nasyid from './assets/nasyid.mpeg';
import Adab from './components/Adab';
import LoveStory from './components/LoveStory';

import Doa from './components/Doa';
import Closing from './components/Closing';
import Footer from './components/Footer';
function AppContent() {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to') || 'Tamu Undangan';
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  // RETURN HARUS DI DALAM FUNGSI AppContent
  return (
    <div className="relative overflow-x-hidden">
      <audio ref={audioRef} loop src={nasyid} />

      <AnimatePresence>
        {!isOpen && <Curtain guestName={guestName} onOpen={handleOpen} />}
      </AnimatePresence>
      
      {isOpen && (
        <div className="bg-[#FAF9F6]">
            <Navbar />
          <Butterfly />
          <FlowerDecoration />
          
          <main className="relative z-20">
            {/* Section Hero & Countdown */}
            <Hero />
              <Verse/>
              <Mempelai />
            <Countdown targetDate={DATA_PENGANTIN.acara.tanggal} />
              <LoveStory />
            <SaveTheDate />

   {/* Section Guestbook */}
            <section className="max-w-xl mx-auto p-8 pb-20">
               <GuestBook guestName={guestName} />
            </section>
            <Adab />
              <Doa />
              <Closing />

          <Footer />
          </main>
        </div>
      )}
    </div>
  );
}

// Wrapper untuk React Router
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}