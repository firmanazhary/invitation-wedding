import { Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const phoneNumber = "6282246431454"; // Nomor WhatsApp kamu
  const message = encodeURIComponent("Halo Firman Azhary, saya tertarik ingin dibuatkan undangan digital seperti ini.");
  
  return (
    <footer className="bg-[#4A3F35] text-[#FAF9F6] py-12 px-8 text-center relative z-50">
      <div className="max-w-md mx-auto space-y-6">
        {/* Branding/Copyright */}
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-bold">
            Created with Love by
          </p>
          <h4 className="text-xl font-serif italic tracking-wider">
            firmanazhary
          </h4>
        </div>

        {/* Marketing Message */}
        <p className="text-sm italic opacity-80 leading-relaxed font-light">
          "Mau undangan digital elegan seperti ini? Silahkan hubungi saya melalui kontak di bawah ini"
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] px-4 py-2 rounded-full text-xs font-bold"
          >
            <MessageCircle size={16} /> WhatsApp
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://instagram.com/firmanazhary_" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-4 py-2 rounded-full text-xs font-bold"
          >
            <Instagram size={16} /> Instagram
          </motion.a>
        </div>

        {/* Copyright Year */}
        <div className="pt-8 border-t border-white/10 mt-8">
          <p className="text-[9px] opacity-40 uppercase tracking-widest">
            © 2026 firmanazhary. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;