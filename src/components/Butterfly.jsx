import { motion } from 'framer-motion';

const Butterfly = () => {
  const butterflies = [...Array(6)]; // Jumlah kupu-kupu

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {butterflies.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -100, y: Math.random() * 800, opacity: 0 }}
          animate={{ 
            x: '110vw', 
            y: [Math.random() * 800, Math.random() * 400, Math.random() * 800],
            opacity: [0, 0.6, 0]
          }}
          transition={{ 
            duration: 15 + Math.random() * 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 3
          }}
          className="absolute text-3xl"
        >
          🦋
        </motion.div>
      ))}
    </div>
  );
};

export default Butterfly;