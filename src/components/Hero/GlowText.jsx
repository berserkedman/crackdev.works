import { motion } from 'framer-motion';

export const GlowText = ({ text, gradient, delay = 0 }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ 
        duration: 1, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{
        fontSize: 'clamp(3rem, 8vw, 7rem)',
        fontWeight: 800,
        background: gradient,
        backgroundSize: '200% 200%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 80px rgba(0, 212, 255, 0.5)',
        margin: '0',
        lineHeight: '1.1',
        animation: 'rotate-gradient 3s ease infinite'
      }}
    >
      {text}
    </motion.h1>
  );
};
