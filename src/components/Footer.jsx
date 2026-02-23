import { MessageCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const phoneNumber = "6282246431454";
  const message = encodeURIComponent("Hi Azhary, bisa buatin undangan?");

  return (
    <footer className="bg-[#1E293B] text-white py-20 px-8 relative z-50 overflow-hidden">
      {/* Dekorasi Halus di Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38BDF8]/50 to-transparent" />
      
      <div className="max-w-md mx-auto text-center space-y-12">
        
        {/* Identity Section */}
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">
              Created By
            </p>
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl font-serif italic tracking-[0.2em] text-white/95"
            >
              firmanazhary
            </motion.h4>
          </div>
          
          <div className="flex justify-center items-center gap-3">
            <div className="h-[1px] w-8 bg-white/10" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/40 font-black">Software Engineer</span>
            <div className="h-[1px] w-8 bg-white/10" />
          </div>
        </div>

        {/* Professional Tagline */}
        <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-[0.2em] px-6">
          "Code. Design. Innovation. Crafting Digital Experiences with Passion and Precision."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <motion.a
            whileHover={{ y: -3, backgroundColor: "#0EA5E9" }}
            whileTap={{ scale: 0.98 }}
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#38BDF8] text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/10 flex items-center justify-center gap-3 transition-all"
          >
            <MessageCircle size={16} /> Hubungi Saya
          </motion.a>

          <motion.a
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.2)" }}
            href="https://firmanazhary.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 text-white/70 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all"
          >
            <ExternalLink size={16} /> Let's Connect
          </motion.a>
        </div>

        {/* Professional Copyright */}
        <div className="pt-16 space-y-2">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6" />
          <p className="text-[8px] text-white/20 uppercase tracking-[0.5em] font-medium">
            © 2026 firmanazhary. All Rights Reserved.
          </p>
          <p className="text-[7px] text-white/10 uppercase tracking-[0.3em]">
            Developed in Bogor — North Sumatra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;