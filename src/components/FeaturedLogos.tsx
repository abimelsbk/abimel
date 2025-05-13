import React from 'react';
import { motion } from 'framer-motion';

const FeaturedLogos: React.FC = () => {
  const logos = [
    { id: 1, name: 'IEEE', light: true },
    { id: 2, name: 'HackTheBox', light: false },
    { id: 3, name: 'Topmate', light: true },
    { id: 4, name: 'Devfolio', light: false },
    { id: 5, name: 'LinkedIn', light: true },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className={`h-12 flex items-center justify-center ${
            logo.light ? 'text-white/30' : 'text-white/50'
          } hover:text-primary transition-colors duration-300`}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <span className="text-xl md:text-2xl font-bold font-orbitron">{logo.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedLogos;