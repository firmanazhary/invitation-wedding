import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Gift } from 'lucide-react';

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
      <pattern id="ulos-hadiah" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
        <path d="M0 15 Q15 0 30 15 Q45 30 60 15"  stroke="#C9983A" strokeWidth="1"   fill="none" opacity="0.09"/>
        <path d="M0 15 Q15 30 30 15 Q45 0  60 15"  stroke="#8B1A1A" strokeWidth="0.6" fill="none" opacity="0.06"/>
        <circle cx="30" cy="15" r="1.5" fill="#C9983A" opacity="0.1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ulos-hadiah)"/>
  </svg>
);

/** Kartu bank dengan tekstur Ulos + bingkai Gorga */
const BankCard = ({ bank, noRek, warna1, warna2, logo }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(noRek);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback untuk browser lama
      const el = document.createElement('textarea');
      el.value = noRek;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(201,152,58,0.2)' }}
      className="relative w-full overflow-hidden cursor-default"
      style={{
        background: `linear-gradient(135deg, ${warna1} 0%, ${warna2} 100%)`,
        border: '1px solid rgba(201,152,58,0.5)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        minHeight: 190,
        padding: '28px 24px',
      }}
    >
      {/* Tekstur Ulos tipis di atas gradien */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
           xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`ulos-card-${bank}`} x="0" y="0" width="40" height="20"
                   patternUnits="userSpaceOnUse">
            <path d="M0 10 Q10 0 20 10 Q30 20 40 10" stroke="#FAF6ED" strokeWidth="1" fill="none"/>
            <path d="M0 10 Q10 20 20 10 Q30 0 40 10" stroke="#FAF6ED" strokeWidth="0.5" fill="none" opacity="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#ulos-card-${bank})`}/>
      </svg>

      {/* Gorga ornamen sudut */}
      {[['top-2 left-2',''],['top-2 right-2','scale-x-[-1]'],
        ['bottom-2 left-2','scale-y-[-1]'],['bottom-2 right-2','scale-[-1]']
      ].map(([pos, tr], i) => (
        <svg key={i} viewBox="0 0 22 22"
             className={`absolute ${pos} w-5 h-5 ${tr} opacity-50`}
             xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 Q11 0 11 11" fill="none" stroke="#FAF6ED" strokeWidth="1.8"/>
          <circle cx="3" cy="3" r="2" fill="#FAF6ED"/>
        </svg>
      ))}

      {/* Chip kartu — ornamen Gorgat diamond */}
      <div className="flex justify-between items-start mb-8">
        <svg viewBox="0 0 36 28" className="w-9 h-7 opacity-80"
             xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="36" height="28" rx="4" fill="#C9983A" opacity="0.3"/>
          <rect x="2" y="2" width="32" height="24" rx="3" fill="none" stroke="#C9983A" strokeWidth="1"/>
          <line x1="18" y1="2"  x2="18" y2="26" stroke="#C9983A" strokeWidth="0.8" opacity="0.6"/>
          <line x1="2"  y1="14" x2="34" y2="14" stroke="#C9983A" strokeWidth="0.8" opacity="0.6"/>
          <polygon points="18,6 22,10 18,14 14,10" fill="#C9983A" opacity="0.7"/>
        </svg>
        {/* Nama bank */}
        <p style={{
          fontFamily: '"Libre Baskerville", serif',
          fontSize: '11px',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: '#FAF6ED',
          opacity: 0.9,
        }}>
          {logo}
        </p>
      </div>

      {/* Nomor rekening */}
      <p style={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: 'clamp(1.3rem, 5vw, 1.7rem)',
        letterSpacing: '0.2em',
        color: '#FAF6ED',
        fontWeight: 600,
        marginBottom: 10,
      }}>
        {noRek.replace(/(\d{4})(?=\d)/g, '$1 ')}
      </p>

      {/* Nama penerima */}
      <p style={{
        fontFamily: '"Libre Baskerville", serif',
        fontSize: '9px',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: '#FAF6EDAA',
        marginBottom: 16,
      }}>
        Sri Suci Safitri
      </p>

      {/* Tombol salin */}
      <motion.button
        onClick={handleCopy}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-5 py-2"
        style={{
          background: copied
            ? 'rgba(201,152,58,0.25)'
            : 'rgba(255,255,255,0.08)',
          border: `1px solid ${copied ? '#C9983A' : 'rgba(250,246,237,0.25)'}`,
          color: copied ? '#C9983A' : '#FAF6ED',
          fontFamily: '"Libre Baskerville", serif',
          fontSize: '8px',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          transition: 'all 0.3s',
          cursor: 'pointer',
        }}
      >
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span key="check"
              initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-1.5">
              <Check size={11}/> Tersalin!
            </motion.span>
          ) : (
            <motion.span key="copy"
              initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-1.5">
              <Copy size={11}/> Salin Nomor
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};

// ─── Komponen Utama ───────────────────────────────────────────────────────────
const REKENING = [
  {
    bank:   'Bank Sumut',
    noRek:  '30002090050516',
    logo:   'Bank Sumut',
    warna1: '#5C1010',
    warna2: '#2A0808',
  },
  {
    bank:   'Bank Mandiri',
    noRek:  '1070022110631',
    logo:   'Bank Mandiri',
    warna1: '#1A2E5A',
    warna2: '#0D1A35',
  },
];

const Hadiah = ({ penerima = 'Sri Suci Safitri' }) => {
  return (
    <section
      className="relative py-28 px-5 overflow-hidden"
      style={{ backgroundColor: '#120808' }}
    >
      <UlosBg />

      {/* Radial vignette */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 20%, #0A0404CC 100%)' }}/>

      {/* Double rim */}
      <div className="absolute inset-5 border border-[#C9983A]/18 pointer-events-none rounded-sm z-[2]"/>
      <div className="absolute inset-9 border border-[#C9983A]/08 pointer-events-none rounded-sm z-[2]"/>

      <div className="relative z-10 max-w-md mx-auto flex flex-col items-center gap-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 text-center"
        >
          {/* Icon amplop */}
          <div className="w-12 h-12 flex items-center justify-center mb-1"
               style={{ border: '1px solid rgba(201,152,58,0.4)',
                        background: 'rgba(201,152,58,0.08)' }}>
            <Gift size={20} style={{ color: '#C9983A' }}/>
          </div>

          <p style={{
            fontFamily: '"Libre Baskerville", serif',
            fontSize: '9px',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#C9983A',
          }}>
            — Amplop Digital —
          </p>

          <GorgatDivider width={180} />

          <h3 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 7vw, 2.8rem)',
            color: '#FAF6ED',
            fontStyle: 'italic',
            letterSpacing: '0.04em',
          }}>
            Hadiah Pernikahan
          </h3>

          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.92rem',
            fontStyle: 'italic',
            color: '#FAF6ED77',
            maxWidth: 280,
            lineHeight: 1.8,
          }}>
            Doa dan kehadiran Anda adalah hadiah terbaik bagi kami.
            Namun jika ingin berbagi kebahagiaan lebih:
          </p>

          <GorgatDivider width={180} />
        </motion.div>

        {/* Kartu rekening */}
        <div className="w-full flex flex-col gap-5">
          {REKENING.map((rek) => (
            <BankCard key={rek.bank} {...rek} />
          ))}
        </div>

        {/* Catatan */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.82rem',
            fontStyle: 'italic',
            color: '#FAF6ED44',
            textAlign: 'center',
          }}
        >
          Konfirmasi transfer dapat menghubungi kami langsung. Jazaakumullah Khairan.
        </motion.p>

        <p style={{ color: '#C9983A', fontSize: '1rem', letterSpacing: '0.5em' }}>✦ ✧ ✦</p>

      </div>

      {/* Gradient fade bawah */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
           style={{ background: 'linear-gradient(to top, #120808, transparent)' }}/>
    </section>
  );
};

export default Hadiah;