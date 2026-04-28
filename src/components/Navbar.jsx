import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Heart, Calendar, MessageCircle, BookOpen } from 'lucide-react';

const NAV_ITEMS = [
  { icon: Home,          label: 'Home',     target: 'hero'          },
  { icon: Heart,         label: 'Mempelai', target: 'mempelai'      },
  { icon: Calendar,      label: 'Acara',    target: 'save-the-date' },
  { icon: BookOpen,      label: 'Nasihat',  target: 'nasehat'       },
  { icon: MessageCircle, label: 'Ucapan',   target: 'guestbook'     },
];

// ─── SVG Gorgat dot — aksen aktif ────────────────────────────────────────────
const GorgatDot = () => (
  <svg viewBox="0 0 10 10" className="w-1.5 h-1.5" xmlns="http://www.w3.org/2000/svg">
    <polygon points="5,0 10,5 5,10 0,5" fill="#C9983A"/>
  </svg>
);

// ─── Komponen Utama ───────────────────────────────────────────────────────────
const Navbar = () => {
  const [active, setActive] = useState('hero');

  // ── Deteksi section aktif saat scroll ──────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => ({
        id: item.target,
        el: document.getElementById(item.target),
      })).filter(s => s.el);

      const scrollY = window.scrollY + window.innerHeight / 2;

      let current = 'hero';
      for (const { id, el } of sections) {
        const top = el.offsetTop;
        if (scrollY >= top) current = id;
      }
      setActive(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Scroll halus ke section ────────────────────────────────────────────────
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset       = 20;
    const bodyRect     = document.body.getBoundingClientRect().top;
    const elementRect  = el.getBoundingClientRect().top;
    const offsetPos    = elementRect - bodyRect - offset;
    window.scrollTo({ top: offsetPos, behavior: 'smooth' });
    setActive(id);
  };

  return (
    <div className="fixed bottom-6 inset-x-0 z-[60] flex justify-center px-4">

      {/* ── Bingkai navbar ── */}
      <motion.nav
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0,  opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        className="relative flex items-center gap-1 py-2.5 px-4"
        style={{
          background:
            'linear-gradient(135deg, rgba(60,10,10,0.88), rgba(20,5,5,0.95))',
          backdropFilter:       'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border:      '1px solid rgba(201,152,58,0.4)',
          boxShadow:
            '0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(201,152,58,0.15)',
        }}
      >

        {/* Ornamen sudut kiri */}
        <svg viewBox="0 0 16 16" className="absolute left-2 top-2 w-3 h-3 opacity-50"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q8 0 8 8" fill="none" stroke="#C9983A" strokeWidth="1.6"/>
          <circle cx="2.5" cy="2.5" r="1.8" fill="#C9983A"/>
        </svg>
        <svg viewBox="0 0 16 16" className="absolute right-2 top-2 w-3 h-3 opacity-50 scale-x-[-1]"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q8 0 8 8" fill="none" stroke="#C9983A" strokeWidth="1.6"/>
          <circle cx="2.5" cy="2.5" r="1.8" fill="#C9983A"/>
        </svg>
        <svg viewBox="0 0 16 16" className="absolute left-2 bottom-2 w-3 h-3 opacity-50 scale-y-[-1]"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q8 0 8 8" fill="none" stroke="#C9983A" strokeWidth="1.6"/>
          <circle cx="2.5" cy="2.5" r="1.8" fill="#C9983A"/>
        </svg>
        <svg viewBox="0 0 16 16" className="absolute right-2 bottom-2 w-3 h-3 opacity-50 scale-[-1]"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q8 0 8 8" fill="none" stroke="#C9983A" strokeWidth="1.6"/>
          <circle cx="2.5" cy="2.5" r="1.8" fill="#C9983A"/>
        </svg>

        {/* ── Nav items ── */}
        {NAV_ITEMS.map((item, i) => {
          const Icon     = item.icon;
          const isActive = active === item.target;

          return (
            <button
              key={i}
              onClick={() => scrollToSection(item.target)}
              className="relative flex flex-col items-center gap-1 min-w-[56px] py-1.5 px-2 group"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {/* Active background pill */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(139,26,26,0.6), rgba(80,10,10,0.8))',
                      border: '1px solid rgba(201,152,58,0.5)',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              <motion.div
                whileTap={{ scale: 0.88 }}
                className="relative z-10 flex items-center justify-center w-8 h-8"
                style={{
                  color:      isActive ? '#C9983A' : 'rgba(250,246,237,0.4)',
                  transition: 'color 0.3s',
                }}
              >
                <Icon size={18}/>
              </motion.div>

              {/* Label */}
              <span
                className="relative z-10"
                style={{
                  fontFamily:     '"Libre Baskerville", serif',
                  fontSize:       '7px',
                  letterSpacing:  '0.3em',
                  textTransform:  'uppercase',
                  color:          isActive ? '#C9983A' : 'rgba(250,246,237,0.35)',
                  transition:     'color 0.3s',
                }}
              >
                {item.label}
              </span>

              {/* Gorgat dot aktif */}
              <div className="relative z-10 h-2 flex items-center justify-center">
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{   scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <GorgatDot />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </button>
          );
        })}

      </motion.nav>
    </div>
  );
};

export default Navbar;