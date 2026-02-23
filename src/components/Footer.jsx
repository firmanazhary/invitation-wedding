import { MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const phoneNumber = "6282246431454";
  const message = encodeURIComponent("Hi Azhary, bisa buatin undangan?");

  return (
    <footer className="bg-[#1E293B] text-white py-20 px-8 relative z-50 overflow-hidden">
      {/* Dekorasi Halus di Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />
      
      <div className="max-w-md mx-auto text-center space-y-10">
        
        {/* Branding Minimalis */}
        <div className="space-y-2">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-serif italic tracking-[0.2em] text-white/90"
          >
            firmanazhary
          </motion.h4>
          <div className="flex justify-center items-center gap-3">
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-medium">Software Engineer</span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>
        </div>

        {/* CTA Simpel */}
        <p className="text-xs italic text-white/60 leading-relaxed font-light px-6">
          "Membangun pengalaman digital yang personal melalui kode dan estetika."
        </p>

        {/* Buttons - Elegant Layout */}
        <div className="flex flex-col gap-3 pt-4">
          {/* Main Action: WhatsApp */}
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${phoneNumber}?text=${message}`}
          
            className="bg-[#38BDF8] text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/10 flex items-center justify-center gap-3"
          >
            <MessageCircle size={16} /> Hubungi Saya
          </motion.a>

          {/* Secondary Action: Portfolio */}
          <motion.a
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            href="https://firmanazhary.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 text-white/70 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-colors"
          >
            <ExternalLink size={16} /> Let's Connect
          </motion.a>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-16">
          <p className="text-[8px] text-white/20 uppercase tracking-[0.5em]">
            © 2026 Crafted in Bogor
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;