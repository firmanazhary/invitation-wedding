import { Home, Heart, Calendar, BookOpen, Gift, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { icon: <Home size={20} />, label: 'Sampul' },
    { icon: <Heart size={20} />, label: 'Mempelai' },
    { icon: <Calendar size={20} />, label: 'Acara' },
    { icon: <BookOpen size={20} />, label: 'Nasihat' },
    { icon: <Gift size={20} />, label: 'Kado' },
    { icon: <MessageCircle size={20} />, label: 'Ucapan' },
  ];

  return (
    <div className="fixed bottom-6 inset-x-0 z-[60] flex justify-center px-4">
      <nav className="bg-white/90 backdrop-blur-md border border-stone-200 shadow-2xl rounded-3xl py-3 px-6 flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
        {navItems.map((item, index) => (
          <button 
            key={index} 
            className="flex flex-col items-center gap-1 group min-w-[50px]"
          >
            <div className="p-2 rounded-full bg-stone-100 text-stone-500 group-hover:bg-[#B58D67] group-hover:text-white transition-all">
              {item.icon}
            </div>
            <span className="text-[10px] font-bold text-stone-400 group-hover:text-[#B58D67] uppercase tracking-tighter">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;