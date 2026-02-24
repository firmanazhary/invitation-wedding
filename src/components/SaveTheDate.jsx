import { motion } from 'framer-motion';
import { Calendar, MapPin, Heart, Home, Navigation } from 'lucide-react';
import bunga from '../assets/bunga.png';
import { DATA_PENGANTIN } from '../constans/content';

const SaveTheDate = () => {
  const mapUrl = DATA_PENGANTIN.acara.embedMaps;
  const googleMapsLink = DATA_PENGANTIN.acara.mapsUrl;
  
  const CardEvent = ({ title, icon: Icon, day, date, month, time, location, delay }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="relative group w-full mb-12"
    >
      <div className="bg-white/60 backdrop-blur-sm rounded-[3rem] p-8 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-blue-100/50 transition-all duration-500">
        <div className="flex flex-col items-center">
          {/* Icon Section */}
          <div className="bg-blue-500/10 p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
            <Icon size={24} className="text-[#38BDF8]" />
          </div>
          
          <h4 className="text-xl font-serif font-black text-[#1E293B] uppercase tracking-widest mb-6">{title}</h4>
          
          {/* Vertical Date Divider Style */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#64748b] font-bold text-right flex-1">{day}</p>
            <div className="h-12 w-[1.5px] bg-gradient-to-b from-transparent via-blue-200 to-transparent" />
            <div className="text-left flex-1">
              <p className="text-4xl font-serif font-black text-[#1E293B] leading-none">{date}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#38BDF8] font-black mt-1">{month}</p>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-[9px] uppercase tracking-[0.4em] text-blue-400 font-black">Pukul {time}</p>
            <p className="text-[13px] font-serif italic font-bold text-[#475569]">{location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id='save-the-date' className="relative min-h-screen bg-[#F0F9FF] overflow-hidden -mt-12 z-40 rounded-t-[5rem] shadow-[0_-30px_60px_rgba(0,0,0,0.05)] pb-24">
      
      {/* 1. Header Image with Zoom Animation */}
      <div className="relative w-full h-[35vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200" 
          className="w-full h-full object-cover" 
          alt="Wedding Backdrop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 via-transparent to-[#F0F9FF]" />
      </div>

      {/* 2. Floating Flowers Animation */}
      <motion.img 
        src={bunga} 
        animate={{ y: [0, 15, 0], rotate: [0, 3, 0] }} 
        transition={{ duration: 8, repeat: Infinity }} 
        className="absolute top-[25%] -left-32 w-80 opacity-40 z-20 pointer-events-none" 
      />
      <motion.img 
        src={bunga} 
        animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }} 
        transition={{ duration: 9, repeat: Infinity }} 
        className="absolute top-[45%] -right-40 w-[400px] opacity-40 z-20 pointer-events-none scale-x-[-1]" 
      />

      {/* 3. The Grand Arch Card Container */}
      <motion.div 
        initial={{ y: 80, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        className="relative -mt-32 mx-6 bg-white/40 backdrop-blur-3xl rounded-t-[12rem] pt-24 pb-16 px-6 text-center shadow-[0_-20px_80px_rgba(3,105,161,0.1)] border-t border-white/80 z-30"
      >
        <div className="mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-400 mb-4 block">The Wedding Day</span>
          <h3 className="text-5xl font-serif italic text-[#1E293B]">Save The Date</h3>
        </div>

        {/* Dynamic Cards using DATA_PENGANTIN */}
        <CardEvent 
          title="Akad Nikah" icon={Heart} 
          day={DATA_PENGANTIN.acara.hari} 
          date={DATA_PENGANTIN.acara.tanggal} 
          month={DATA_PENGANTIN.acara.bulan} 
          time={DATA_PENGANTIN.acara.waktuAkad} 
          location={DATA_PENGANTIN.acara.lokasiAcara} 
          delay={0.2} 
        />
        
        <CardEvent 
          title="Walimah" icon={Home} 
          day={DATA_PENGANTIN.acara.hari} 
          date={DATA_PENGANTIN.acara.tanggal} 
          month={DATA_PENGANTIN.acara.bulan} 
          time={DATA_PENGANTIN.acara.waktuWalimah} 
          location={DATA_PENGANTIN.acara.lokasiAcara} 
          delay={0.4} 
        />

        {/* 4. Maps Modern Card */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="mt-12 space-y-10"
        >
          <div className="group relative w-full aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white/50 bg-white">
            <iframe 
              src={mapUrl} 
              width="100%" height="100%" style={{ border: 0 }} 
              allowFullScreen="" loading="lazy" 
              className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" 
            />
            <div className="absolute top-6 right-6">
               <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                  <Navigation size={20} className="text-[#38BDF8] animate-bounce" />
               </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#0369A1]">
               {DATA_PENGANTIN.acara.alamatLengkap}
            </h4>
            <p className="text-[10px] text-[#64748b] leading-relaxed font-bold uppercase tracking-widest opacity-60">
              Sumatera Utara, Indonesia
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-5 pt-6 max-w-[280px] mx-auto">
            <motion.a 
              href={googleMapsLink} target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#38BDF8] to-[#0284C7] text-white py-5 rounded-3xl text-[10px] font-black uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(56,189,248,0.3)] flex justify-center items-center gap-3"
            >
              <Navigation size={16} /> Get Directions
            </motion.a>
            
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="border border-blue-100 bg-white/50 text-[#38BDF8] py-4 rounded-3xl text-[9px] font-black uppercase tracking-[0.3em] hover:bg-white transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <Calendar size={14} /> Save Event
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle Copyright */}
      <div className="text-center mt-12 opacity-20">
        <p className="text-[8px] text-blue-900 uppercase tracking-[0.8em] font-black">
          © 2026 Crafted by firmanazhary
        </p>
      </div>
    </section>
  );
};

export default SaveTheDate;