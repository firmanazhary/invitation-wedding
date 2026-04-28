import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import nasyidFile from '../assets/nasyid.mpeg';

const MusicPlayer = ({ isOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
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
    <div className="fixed bottom-35 right-5 z-[100]">
      <audio ref={audioRef} loop src={nasyidFile}/>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 10 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* 1. Cincin Ornamen Hybrid (Berputar hanya saat playing) */}
            <motion.svg
              viewBox="0 0 64 64"
              className="absolute w-16 h-16 pointer-events-none"
              animate={{ 
                rotate: isPlaying ? 360 : 0,
                opacity: isPlaying ? 1 : 0.3 // Meredup saat mute agar tidak aneh
              }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" r="30" fill="none"
                      stroke={isPlaying ? "#C9983A" : "rgba(201,152,58,0.2)"} 
                      strokeWidth="0.5" strokeDasharray="4 2"/>
              
              {/* Diamond Gorgat */}
              {Array.from({ length: 8 }, (_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const cx = 32 + 28 * Math.cos(angle);
                const cy = 32 + 28 * Math.sin(angle);
                return (
                  <polygon key={i}
                    points={`${cx},${cy-3} ${cx+3},${cy} ${cx},${cy+3} ${cx-3},${cy}`}
                    fill="#C9983A" 
                    className="transition-opacity duration-500"
                    style={{ opacity: isPlaying ? 0.8 : 0.2 }}
                  />
                );
              })}
            </motion.svg>

            {/* 2. Glow Pulse Mandailing (Hanya muncul saat playing) */}
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute w-12 h-12 rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(139,26,26,0.6), transparent)' }}
                />
              )}
            </AnimatePresence>

            {/* 3. Tombol Utama - Style Gunungan/Wayang */}
            <motion.button
              onClick={toggleMusic}
              whileTap={{ scale: 0.9 }}
              className="relative w-12 h-12 flex items-center justify-center z-10 overflow-hidden"
              style={{
                background: isPlaying
                  ? 'linear-gradient(135deg, #8B1A1A, #6B1414)' // Maroon Mandailing
                  : 'rgba(28, 25, 23, 0.9)', // Stone Dark (Nuansa Jawa Wayang)
                border: `1px solid ${isPlaying ? '#C9983A' : 'rgba(201,152,58,0.3)'}`,
                borderRadius: '12px 12px 4px 4px', // Bentuk sedikit mirip siluet Gunungan
                boxShadow: isPlaying ? '0 0 15px rgba(201,152,58,0.4)' : 'none',
                color: '#C9983A',
                transition: 'all 0.5s ease'
              }}
            >
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div key="on"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <Volume2 size={20}/>
                  </motion.div>
                ) : (
                  <motion.div key="off"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    <VolumeX size={20} className="opacity-60" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* 4. Visualizer Minimalis (Hanya saat playing) */}
            <AnimatePresence>
              {isPlaying && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-1 -right-1 flex gap-[2px] items-end bg-[#2D0A0A] p-1 rounded-full border border-[#C9983A]/30"
                >
                  {[0.4, 0.7, 0.5].map((h, i) => (
                    <motion.div key={i}
                      animate={{ scaleY: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
                      style={{
                        width: 2, height: 8, borderRadius: 1,
                        backgroundColor: '#C9983A',
                        transformOrigin: 'bottom',
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MusicPlayer;