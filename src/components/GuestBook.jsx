import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useSearchParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

/** Ulos background */
const UlosBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="ulos-gb" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15"  stroke="#C9983A" strokeWidth="1"   fill="none" opacity="0.09"/>
        <path d="M0 15 Q15 30 30 15 Q45 0  60 15"  stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-gb)"/>
  </svg>
);

/** Bingkai form / comment dengan ornamen sudut */
const OrnateFrame = ({ children, className = '' }) => (
  <div className={`relative ${className}`}
       style={{
         background: 'linear-gradient(145deg, rgba(139,26,26,0.28), rgba(20,8,8,0.72))',
         backdropFilter: 'blur(14px)',
         WebkitBackdropFilter: 'blur(14px)',
         border: '1px solid rgba(201,152,58,0.32)',
         boxShadow: '0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(201,152,58,0.12)',
       }}>
    {/* Ornamen sudut */}
    {[['top-1.5 left-1.5',''],['top-1.5 right-1.5','scale-x-[-1]'],
      ['bottom-1.5 left-1.5','scale-y-[-1]'],['bottom-1.5 right-1.5','scale-[-1]']
    ].map(([pos, tr], i) => (
      <svg key={i} viewBox="0 0 18 18"
           className={`absolute ${pos} w-3.5 h-3.5 ${tr} opacity-55`}
           xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 Q9 0 9 9" fill="none" stroke="#C9983A" strokeWidth="1.6"/>
        <circle cx="2.5" cy="2.5" r="1.8" fill="#C9983A"/>
      </svg>
    ))}
    {children}
  </div>
);

/** Input field bergaya maroon-gold */
const OrnateInput = ({ as: Tag = 'input', ...props }) => (
  <Tag
    {...props}
    style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(201,152,58,0.3)',
      borderRadius: 0,
      color: '#FAF6ED',
      fontFamily: '"Libre Baskerville", serif',
      fontSize: '13px',
      padding: Tag === 'textarea' ? '14px 16px' : '12px 16px',
      width: '100%',
      outline: 'none',
      resize: 'none',
      caretColor: '#C9983A',
    }}
    className="placeholder-[#C9983A55] focus:border-[#C9983A] transition-colors duration-300"
  />
);


/** Card komentar individual - */
const CommentCard = ({ item, index }) => (
  <motion.div
    key={item.id || index}
    initial={{ opacity: 0, y: 16, scale: 0.97 }}
    animate={{ opacity: 1, y: 0,  scale: 1 }}
    exit={{    opacity: 0, y: -10, scale: 0.97 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className="relative p-5"
    style={{
      background: 'linear-gradient(145deg, rgba(139,26,26,0.2), rgba(20,8,8,0.6))',
      border: '1px solid rgba(201,152,58,0.22)',
      borderLeft: '2px solid rgba(201,152,58,0.7)',
    }}
  >
    <svg viewBox="0 0 100 100" className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,0 100,50 50,100 0,50" fill="#C9983A"/>
    </svg>

    <p style={{
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#FAF6ED',
      letterSpacing: '0.04em',
      marginBottom: '6px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    }}>
      <span style={{ color: '#C9983A', fontSize: '0.6rem' }}>✦</span>
      {item.name}
    </p>

    <p style={{
      fontFamily: '"Cormorant Garamond", serif',
      fontSize: '0.9rem',
      fontStyle: 'italic',
      color: '#FAF6EDAA',
      lineHeight: 1.8,
    }}>
      "{item.message}"
    </p>
  </motion.div>
);

// ─── Komponen Utama ───────────────────────────────────────────────────────────
const GuestBook = () => {
  const [searchParams]  = useSearchParams();
  const [comments, setComments] = useState([]);
  const [nama,  setNama]  = useState(searchParams.get('to') || '');
  const [ucapan, setUcapan] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ambilData = async () => {
      const { data } = await supabase
        .from('comments') // Pastikan tabel 'comments' sudah ada di Supabase
        .select('*')
        .order('created_at', { ascending: false });
      setComments(data || []);
    };
    ambilData();
  }, []);

  const kirimUcapan = async (e) => {
    e.preventDefault();
    if (!nama || !ucapan) return alert('Mohon isi nama dan pesan Anda');
    setLoading(true);
    const { error } = await supabase
      .from('comments')
      .insert([{ name: nama, message: ucapan, status: 'Hadir' }]);
    
    if (!error) {
      setUcapan('');
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      const { data } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });
      setComments(data || []);
    }
    setLoading(false);
  };

  return (
    <section id="guestbook" className="relative py-28 px-5 overflow-hidden" style={{ backgroundColor: '#100606' }}>
      <UlosBg />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 20%, #0A0404CC 100%)' }}/>

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-10">

        {/* ── Header Modern ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-3 text-center">
          <p style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '9px', letterSpacing: '0.5em', textTransform: 'uppercase', color: '#C9983A' }}>
            — Share Your Happiness —
          </p>
          <GorgatDivider width={180} />
          <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 7vw, 2.8rem)', color: '#FAF6ED', fontStyle: 'italic', letterSpacing: '0.04em' }}>
            Wishes & Congratulations
          </h3>
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.9rem', fontStyle: 'italic', color: '#FAF6ED77' }}>
            Tinggalkan pesan dan harapan terbaik Anda untuk kami.
          </p>
          <GorgatDivider width={180} />
        </motion.div>

        {/* ── Form ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="w-full">
          <OrnateFrame className="p-6">
            <form onSubmit={kirimUcapan} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '7px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9983A' }}>Nama</label>
                <OrnateInput type="text" placeholder="Masukkan nama Anda..." value={nama} onChange={e => setNama(e.target.value)} />
              </div>

              <div className="flex flex-col gap-1.5">
                <label style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '7px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#C9983A' }}>Pesan & Harapan</label>
                <OrnateInput as="textarea" placeholder="Tuliskan ucapan selamat Anda di sini..." value={ucapan} onChange={e => setUcapan(e.target.value)} rows={4} />
              </div>

              <div className="relative mt-1">
                <div className="absolute inset-0 blur-lg opacity-25 rounded-sm" style={{ backgroundColor: '#8B1A1A' }}/>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 24px #C9983A44' }}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full flex items-center justify-center gap-2.5 py-3.5 rounded-sm"
                  style={{
                    background: loading ? 'rgba(139,26,26,0.4)' : 'linear-gradient(135deg, #8B1A1A, #6B1414)',
                    border: '1px solid #C9983A',
                    color: '#FAF6ED',
                    fontFamily: '"Libre Baskerville", serif',
                    fontSize: '8px',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                  }}
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.span key="sent" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} style={{ color: '#C9983A' }}>
                        ✦ Pesan Terkirim ✦
                      </motion.span>
                    ) : (
                      <motion.span key="send" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="flex items-center gap-2">
                        <span style={{ color: '#C9983A' }}>✦</span>
                        <Send size={12} style={{ color: '#C9983A' }}/>
                        {loading ? 'Mengirim…' : 'Kirim Pesan'}
                        <span style={{ color: '#C9983A' }}>✦</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </form>
          </OrnateFrame>
        </motion.div>

        {/* ── Daftar Komentar ── */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-3 mb-1">
            <GorgatDivider width={60} />
            <p style={{ fontFamily: '"Libre Baskerville", serif', fontSize: '8px', letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9983A', whiteSpace: 'nowrap' }}>
              {comments.length} Wishes
            </p>
            <GorgatDivider width={60} />
          </div>

          <div className="relative">
            <div className="flex flex-col gap-3 overflow-y-auto pr-1" style={{ maxHeight: '460px', scrollbarWidth: 'thin', scrollbarColor: '#C9983A44 transparent' }}>
              <AnimatePresence initial={false}>
                {comments.map((item, index) => (
                  <CommentCard key={item.id || index} item={item} index={index} />
                ))}
              </AnimatePresence>
              {comments.length === 0 && (
                <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.9rem', fontStyle: 'italic', color: '#FAF6ED44', textAlign: 'center', padding: '2rem 0' }}>
                  Jadilah yang pertama memberikan harapan indah…
                </p>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none" style={{ background: 'linear-gradient(to top, #100606, transparent)' }}/>
          </div>
        </motion.div>

        <p style={{ color: '#C9983A', fontSize: '1rem', letterSpacing: '0.5em' }}>✦ ✧ ✦</p>
      </div>
    </section>
  );
};


export default GuestBook;