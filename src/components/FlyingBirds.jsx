import { motion } from 'framer-motion';

export const FlyingBirds = ({ curtainMode = false }) => {
  const birds = [...Array(curtainMode ? 3 : 6)];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {birds.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: -100, 
            y: Math.random() * 500, 
            opacity: 0,
            scale: 0.5 
          }}
          animate={{ 
            x: '110vw', 
            y: [200, 100, 300, 150],
            opacity: [0, 0.5, 0],
            scale: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 15 + i * 5, 
            repeat: Infinity, 
            delay: i * 2,
            ease: "easeInOut" 
          }}
          className="absolute text-2xl"
        >
          🕊️
        </motion.div>
      ))}
    </div>
  );
};