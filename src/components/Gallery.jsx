import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

// ─── SVG Ornamen ──────────────────────────────────────────────────────────────

const GorgatDivider = ({ width = 160 }) => (
  <svg viewBox={`0 0 ${width} 20`} style={{ width }} className="opacity-65 mx-auto"
       xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="10" x2={width} y2="10" stroke="#C9983A" strokeWidth="0.5" opacity="0.4"/>
    {Array.from({ length: Math.floor(width / 18) }, (_, i) => {
      const cx = 9 + i * 18;
      return <polygon key={i} points={`${cx},3 ${cx+7},10 ${cx},17 ${cx-7},10`} fill="#C9983A"/>;
    })}
  </svg>
);

const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-gallery" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15"  stroke="#C9983A" strokeWidth="1"   fill="none" opacity="0.09"/>
        <path d="M0 15 Q15 30 30 15 Q45 0  60 15"  stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-gallery)"/>
  </svg>
);

// ─── Lightbox ─────────────────────────────────────────────────────────────────
const Lightbox = ({ photos, index, onClose, onPrev, onNext }) => {
  // Tutup saat klik backdrop
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ backgroundColor: 'rgba(8,3,3,0.95)', backdropFilter: 'blur(10px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdrop}
    >
      {/* Tombol tutup */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-5 right-5 z-10 flex items-center justify-center w-10 h-10"
        style={{ border: '1px solid rgba(201,152,58,0.5)', color: '#C9983A',
                 background: 'rgba(20,8,8,0.8)' }}
      >
        <X size={18}/>
      </motion.button>

      {/* Counter */}
      <p className="absolute top-5 left-5 z-10"
         style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '8px',
                  letterSpacing: '0.4em', color: '#C9983A',
                  textTransform: 'uppercase' }}>
        {index + 1} / {photos.length}
      </p>

      {/* Prev */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        className="absolute left-3 flex items-center justify-center w-10 h-10 z-10"
        style={{ border: '1px solid rgba(201,152,58,0.4)', color: '#C9983A',
                 background: 'rgba(20,8,8,0.7)' }}
      >
        <ChevronLeft size={20}/>
      </motion.button>

      {/* Foto utama */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative max-w-2xl w-full"
          style={{ border: '1px solid rgba(201,152,58,0.35)',
                   boxShadow: '0 0 60px rgba(201,152,58,0.15)' }}
        >
          <img
            src={photos[index].src}
            alt={photos[index].alt || `Foto ${index + 1}`}
            className="w-full max-h-[75vh] object-contain"
            style={{ display: 'block', background: '#0E0505' }}
          />
          {/* Ornamen sudut lightbox */}
          {[['top-2 left-2',''],['top-2 right-2','scale-x-[-1]'],
            ['bottom-2 left-2','scale-y-[-1]'],['bottom-2 right-2','scale-[-1]']
          ].map(([pos, tr], i) => (
            <svg key={i} viewBox="0 0 18 18"
                 className={`absolute ${pos} w-3.5 h-3.5 ${tr} opacity-60`}
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0 Q9 0 9 9" fill="none" stroke="#C9983A" strokeWidth="1.6"/>
              <circle cx="2.5" cy="2.5" r="1.8" fill="#C9983A"/>
            </svg>
          ))}

          {/* Caption */}
          {photos[index].caption && (
            <div className="px-4 py-3"
                 style={{ background: 'rgba(14,5,5,0.9)',
                          borderTop: '1px solid rgba(201,152,58,0.2)' }}>
              <p style={{ fontFamily: '"Cormorant Garamond", serif',
                          fontSize: '0.9rem', fontStyle: 'italic',
                          color: '#FAF6EDAA', textAlign: 'center' }}>
                {photos[index].caption}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="absolute right-3 flex items-center justify-center w-10 h-10 z-10"
        style={{ border: '1px solid rgba(201,152,58,0.4)', color: '#C9983A',
                 background: 'rgba(20,8,8,0.7)' }}
      >
        <ChevronRight size={20}/>
      </motion.button>
    </motion.div>
  );
};

// ─── Thumbnail Grid ───────────────────────────────────────────────────────────
const PhotoTile = ({ photo, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-20px' }}
    transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
    whileHover={{ scale: 1.03, zIndex: 10 }}
    onClick={() => onClick(index)}
    className="relative overflow-hidden cursor-pointer group"
    style={{
      border: '1px solid rgba(201,152,58,0.25)',
      aspectRatio: index % 5 === 0 ? '1/1.3' : '1/1', // variasi tinggi
    }}
  >
    <img
      src={photo.src}
      alt={photo.alt || `Foto ${index + 1}`}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      style={{ filter: 'sepia(8%) contrast(1.02)' }}
    />

    {/* Overlay hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
         style={{ background: 'rgba(139,26,26,0.55)',
                  backdropFilter: 'blur(2px)' }}>
      <p style={{ color: '#C9983A', fontSize: '1.2rem', letterSpacing: '0.4em' }}>✦</p>
    </div>

    {/* Ornamen sudut kiri-atas */}
    <svg viewBox="0 0 16 16" className="absolute top-1.5 left-1.5 w-3 h-3 opacity-50"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0 Q8 0 8 8" fill="none" stroke="#C9983A" strokeWidth="1.5"/>
      <circle cx="2" cy="2" r="1.5" fill="#C9983A"/>
    </svg>
    <svg viewBox="0 0 16 16" className="absolute bottom-1.5 right-1.5 w-3 h-3 opacity-50 scale-[-1]"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0 Q8 0 8 8" fill="none" stroke="#C9983A" strokeWidth="1.5"/>
      <circle cx="2" cy="2" r="1.5" fill="#C9983A"/>
    </svg>
  </motion.div>
);

// ─── Komponen Utama ───────────────────────────────────────────────────────────
const Gallery = ({ photos = [] }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox  = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(() =>
    setLightboxIndex(i => (i - 1 + photos.length) % photos.length), [photos.length]);
  const nextPhoto = useCallback(() =>
    setLightboxIndex(i => (i + 1) % photos.length), [photos.length]);

  // Keyboard navigation
  const handleKey = useCallback((e) => {
    if (lightboxIndex === null) return;
    if (e.key === 'ArrowLeft')  prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'Escape')     closeLightbox();
  }, [lightboxIndex, prevPhoto, nextPhoto, closeLightbox]);

  useState(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  return (
    <section
      id="gallery"
      className="relative py-28 px-5 overflow-hidden"
      style={{ backgroundColor: '#140A0A' }}
    >
      <UlosBg />

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 20%, #0A0404CC 100%)' }}/>

      {/* Double rim */}
      <div className="absolute inset-5 border border-[#C9983A]/18 pointer-events-none rounded-sm z-[2]"/>
      <div className="absolute inset-9 border border-[#C9983A]/08 pointer-events-none rounded-sm z-[2]"/>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <div className="w-12 h-12 flex items-center justify-center mb-1"
               style={{ border: '1px solid rgba(201,152,58,0.4)',
                        background: 'rgba(201,152,58,0.08)' }}>
            <Images size={20} style={{ color: '#C9983A' }}/>
          </div>

          <p style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: '9px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#C9983A',
          }}>
            — Galeri Kenangan —
          </p>

          <GorgatDivider width={180} />

          <h3 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 7vw, 2.8rem)',
            color: '#FAF6ED',
            fontStyle: 'italic',
            letterSpacing: '0.04em',
          }}>
            Our Moments
          </h3>

          <GorgatDivider width={180} />
        </motion.div>

        {/* Grid foto */}
        {photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {photos.map((photo, i) => (
              <PhotoTile key={i} photo={photo} index={i} onClick={openLightbox} />
            ))}
          </div>
        ) : (
          /* Placeholder saat belum ada foto */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="flex items-center justify-center"
                   style={{
                     aspectRatio: '1/1',
                     background: 'rgba(139,26,26,0.1)',
                     border: '1px dashed rgba(201,152,58,0.25)',
                   }}>
                <p style={{ color: '#C9983A33', fontSize: '1.5rem' }}>✦</p>
              </div>
            ))}
          </div>
        )}

        <p style={{ color: '#C9983A', fontSize: '1rem', letterSpacing: '0.5em',
                    textAlign: 'center' }}>
          ✦ ✧ ✦
        </p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>

      {/* Gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
           style={{ background: 'linear-gradient(to top, #140A0A, transparent)' }}/>
    </section>
  );
};

export default Gallery;