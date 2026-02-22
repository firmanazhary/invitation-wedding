import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import bunga from '../assets/bunga.png'; 
import nasyidFile from '../assets/nasyid.mpeg'; // Import nasyid agar terbaca Vite

const MusicPlayer = ({ isOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 1. Logika Auto-Play yang Aman
  useEffect(() => {
    if (isOpen && audioRef.current) {
      // Browser memberikan izin play karena ini dipicu dari klik handleOpen di App.jsx
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log("Nasyid Auto-Play Berhasil!");
          })
          .catch((error) => {
            console.log("Autoplay diblokir, butuh klik manual:", error);
            setIsPlaying(false);
          });
      }
    }
  }, [isOpen]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-24 right-6 z-[100]">
      {/* 2. Audio Element menggunakan file yang di-import */}
      <audio ref={audioRef} loop src={nasyidFile} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative"
          >
            {/* Ornamen Mawar Berputar */}
            <motion.img 
              src={bunga}
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 w-16 h-16 opacity-30 pointer-events-none"
            />

            {/* Floating Button untuk Bisukan/Nyalakan */}
            <button
              onClick={toggleMusic}
              className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md border border-white transition-all
                ${isPlaying ? 'bg-[#38BDF8] text-white shadow-blue-300' : 'bg-white/80 text-[#38BDF8] shadow-gray-200'}`}
            >
              {isPlaying ? (
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <Volume2 size={20} />
                </motion.div>
              ) : (
                <VolumeX size={20} />
              )}
            </button>

            {/* Bar Visualizer Musik */}
            {isPlaying && (
              <div className="absolute -top-1 -right-1 flex gap-[2px]">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 12, 4] }}
                    transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.2 }}
                    className="w-[2px] bg-[#38BDF8] rounded-full"
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicPlayer;