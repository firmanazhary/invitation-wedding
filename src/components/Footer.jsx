import { MessageCircle, ExternalLink, Code2, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// ─── Subtle grid background ───────────────────────────────────────────────────
const GridBg = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
       xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid-footer" x="0" y="0" width="40" height="40"
               patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none"
              stroke="#ffffff" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-footer)"/>
  </svg>
);

// ─── Floating dot accent ──────────────────────────────────────────────────────
const FloatDot = ({ x, y, delay, size = 2 }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`,
             width: size, height: size,
             backgroundColor: '#6EE7B7' }}
    animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.4, 0.8] }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
);

// ─── Tech badge ───────────────────────────────────────────────────────────────
const TechBadge = ({ label }) => (
  <span style={{
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    fontSize: '9px',
    letterSpacing: '0.08em',
    color: '#6EE7B7',
    background: 'rgba(110,231,183,0.07)',
    border: '1px solid rgba(110,231,183,0.2)',
    padding: '3px 10px',
    borderRadius: 2,
  }}>
    {label}
  </span>
);

// ─── Komponen ─────────────────────────────────────────────────────────────────
const Footer = () => {
  const phoneNumber = '6282246431454';
  const message = encodeURIComponent(
    'Hi Azhary, saya tertarik buat undangan digital atau website seperti ini. Bisa info detailnya?'
  );

  return (
    <footer className="relative overflow-hidden z-50"
            style={{ backgroundColor: '#080F17' }}>

      {/* Grid background */}
      <GridBg />

      {/* Ambient glow kiri */}
      <div className="absolute -left-32 top-0 w-72 h-72 rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.06), transparent 70%)' }}/>
      {/* Ambient glow kanan */}
      <div className="absolute -right-32 bottom-0 w-72 h-72 rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.07), transparent 70%)' }}/>

      {/* Floating dots */}
      <FloatDot x={12} y={20} delay={0}   size={2}/>
      <FloatDot x={88} y={15} delay={1.2} size={3}/>
      <FloatDot x={25} y={75} delay={2.1} size={2}/>
      <FloatDot x={75} y={80} delay={0.8} size={2}/>
      <FloatDot x={50} y={10} delay={1.8} size={2}/>

      {/* ── Separator dari section sebelumnya ── */}
      <div className="relative h-20 overflow-hidden"
           style={{ background:
             'linear-gradient(to bottom, #0A0404 0%, #080F17 100%)' }}>
        {/* Transisi garis diagonal */}
        <svg viewBox="0 0 400 80" className="absolute bottom-0 w-full"
             preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80 L0 40 Q200 0 400 40 L400 80 Z"
                fill="#080F17"/>
          <path d="M0 40 Q200 0 400 40"
                fill="none" stroke="rgba(110,231,183,0.15)" strokeWidth="1"/>
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 px-6 pb-16 pt-4 max-w-md mx-auto
                      flex flex-col items-center gap-12 text-center">

        {/* Identity block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-5"
        >
          {/* Avatar / Logo text */}
          <div className="relative">
            <div className="w-16 h-16 flex items-center justify-center"
                 style={{
                   background: 'linear-gradient(135deg, #0F1F35, #1A2F4A)',
                   border: '1px solid rgba(110,231,183,0.3)',
                   boxShadow: '0 0 24px rgba(110,231,183,0.08)',
                 }}>
              <Code2 size={24} style={{ color: '#6EE7B7' }}/>
            </div>
            {/* Status dot */}
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
              style={{ backgroundColor: '#6EE7B7',
                       boxShadow: '0 0 6px #6EE7B7' }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Badge open */}
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex items-center gap-2"
          >
            <Sparkles size={10} style={{ color: '#6EE7B7' }}/>
            <span style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '9px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#6EE7B7',
            }}>
              Available for Projects
            </span>
            <Sparkles size={10} style={{ color: '#6EE7B7' }}/>
          </motion.div>

          {/* Nama */}
          <div>
            <h4 style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 6vw, 2.6rem)',
              color: '#F0F6FF',
              fontStyle: 'italic',
              letterSpacing: '0.06em',
              lineHeight: 1.1,
            }}>
              firmanazhary
            </h4>
            <p style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '9px',
              letterSpacing: '0.2em',
              color: 'rgba(240,246,255,0.35)',
              marginTop: 6,
            }}>
              Software Engineering Student
            </p>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {['React', 'Tailwind', 'Framer Motion', 'Supabase'].map(t => (
              <TechBadge key={t} label={t}/>
            ))}
          </div>
        </motion.div>

        {/* Divider garis tipis */}
        <div className="w-full h-px"
             style={{ background:
               'linear-gradient(to right, transparent, rgba(110,231,183,0.2), transparent)' }}/>

        {/* Pitch text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-4"
        >
          <h5 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.3rem, 4.5vw, 1.7rem)',
            color: '#F0F6FF',
            fontStyle: 'italic',
            lineHeight: 1.5,
          }}>
            Tertarik membuat undangan digital<br/>
            atau website impian Anda?
          </h5>
          <p style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '0.88rem',
            fontStyle: 'italic',
            color: 'rgba(240,246,255,0.45)',
            lineHeight: 1.9,
            maxWidth: 270,
          }}>
            Desain eksklusif, animasi halus, dan pengalaman
            interaktif yang tak terlupakan.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-3 w-full max-w-[260px]"
        >
          {/* WhatsApp — primary */}
          <motion.a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.03,
                          boxShadow: '0 0 32px rgba(110,231,183,0.2)' }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center justify-center gap-2.5 py-3.5 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0F4C35, #0D3D2C)',
              border: '1px solid rgba(110,231,183,0.45)',
              color: '#6EE7B7',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '9px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            {/* Shimmer */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ background:
                'linear-gradient(90deg, transparent, rgba(110,231,183,0.07), transparent)',
                       skewX: '-20deg' }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <MessageCircle size={13}/>
            Konsultasi Gratis
            <ArrowUpRight size={12}/>
          </motion.a>

          {/* Portfolio — secondary */}
          <motion.a
            href="https://firmanazhary.netlify.app"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ borderColor: 'rgba(240,246,255,0.25)',
                          color: '#F0F6FF' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2.5 py-3"
            style={{
              background: 'transparent',
              border: '1px solid rgba(240,246,255,0.1)',
              color: 'rgba(240,246,255,0.4)',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '9px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
          >
            <ExternalLink size={12}/>
            View Portfolio
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px"
             style={{ background:
               'linear-gradient(to right, transparent, rgba(240,246,255,0.06), transparent)' }}/>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <p style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '7px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(240,246,255,0.15)',
            lineHeight: 2,
          }}>
            © 2026 firmanazhary · All Rights Reserved<br/>
            Bogor — North Sumatra — Indonesia
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;