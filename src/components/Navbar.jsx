import { Home, Heart, Calendar, MessageCircle, BookOpen } from 'lucide-react';

const Navbar = () => {
  // Fungsi untuk scroll halus ke section tujuan
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset sedikit ke atas agar posisi berhentinya pas
      const offset = 20; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { icon: <Home size={20} />, label: 'Home', target: 'hero' },
    { icon: <Heart size={20} />, label: 'Mempelai', target: 'mempelai' },
    { icon: <Calendar size={20} />, label: 'Acara', target: 'save-the-date' },
    { icon: <BookOpen size={20} />, label: 'Nasihat', target: 'nasehat' },
    { icon: <MessageCircle size={20} />, label: 'Ucapan', target: 'guestbook' },
  ];

  return (
    <div className="fixed bottom-6 inset-x-0 z-[60] flex justify-center px-4">
      {/* Container Navigasi dengan Efek Glassmorphism Mewah */}
      <nav className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_20px_50px_rgba(56,189,248,0.2)] rounded-full py-3 px-6 flex items-center gap-2 md:gap-8 overflow-x-auto no-scrollbar">
        {navItems.map((item, index) => (
          <button 
            key={index} 
            onClick={() => scrollToSection(item.target)}
            className="flex flex-col items-center gap-1 group min-w-[60px] transition-all"
          >
            {/* Lingkaran Ikon dengan Hover Effect Biru */}
            <div className="p-2 rounded-full bg-blue-50/50 text-[#64748b] group-hover:bg-[#38BDF8] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300 transform group-active:scale-90">
              {item.icon}
            </div>
            {/* Label Menu */}
            <span className="text-[9px] font-black text-[#94a3b8] group-hover:text-[#38BDF8] uppercase tracking-[0.15em] transition-colors">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;