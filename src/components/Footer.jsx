import { MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const phoneNumber = "6282246431454";
  const message = encodeURIComponent("Hi Azhary, saya tertarik buat undangan digital atau website seperti ini. Bisa info detailnya?");

  return (
    <footer className="bg-[#1E293B] text-white py-24 px-8 relative z-50 overflow-hidden">
      {/* Dekorasi Halus di Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />
      
      <div className="max-w-md mx-auto text-center space-y-12">
        
        {/* Identity & Offer Section */}
        <div className="space-y-6">
          <div className="space-y-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex justify-center items-center gap-2 text-[#38BDF8] mb-2"
            >
              <Sparkles size={14} />
              <span className="text-[9px] uppercase tracking-[0.5em] font-black">Open for Projects</span>
            </motion.div>
            <h4 className="text-xl font-serif italic text-white/95 leading-relaxed">
              Tertarik membuat undangan digital <br/> atau website impian Anda?
            </h4>
          </div>

          <p className="text-[10px] text-white/50 leading-relaxed font-medium uppercase tracking-[0.2em] px-4">
            "Wujudkan momen spesial Anda dengan desain eksklusif dan fitur modern yang interaktif."
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <motion.a
            whileHover={{ y: -3, backgroundColor: "#0EA5E9" }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#38BDF8] text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_15px_30px_rgba(56,189,248,0.2)] flex items-center justify-center gap-3 transition-all"
          >
            <MessageCircle size={16} /> Konsultasi Gratis
          </motion.a>

          <motion.a
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.2)" }}
            href="https://firmanazhary.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 text-white/70 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all"
          >
            <ExternalLink size={16} /> About Me
          </motion.a>
        </div>

        {/* Professional Copyright & Credits */}
        <div className="pt-20 space-y-4">
          <div className="h-[1px] w-1/4 bg-white/5 mx-auto" />
          <div className="space-y-1">
            <p className="text-[8px] text-white/20 uppercase tracking-[0.6em] font-medium">
              Handcrafted with Passion By
            </p>
            <p className="text-sm font-serif italic tracking-[0.2em] text-white/60">
              firmanazhary
            </p>
          </div>
          <div className="pt-8">
            <p className="text-[7px] text-white/10 uppercase tracking-[0.4em] leading-loose">
              © 2026 All Rights Reserved <br/>
              Bogor — North Sumatra — Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;