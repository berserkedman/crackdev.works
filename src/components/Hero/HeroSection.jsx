import { motion } from 'framer-motion';
import { ParticleField } from './ParticleField';
import { GlowText } from './GlowText';
import './HeroSection.css';

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="hero-section">
      <ParticleField count={80} />
      
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            delay: 0.3, 
            type: "spring",
            stiffness: 200
          }}
        >
          <span className="badge-icon">✦</span>
          <span>Available for hire</span>
        </motion.div>

        <div className="hero-titles">
          <GlowText 
            text="Crafting Digital" 
            gradient="linear-gradient(90deg, #00d4ff, #a855f7)"
            delay={0.5}
          />
          <GlowText 
            text="Experiences" 
            gradient="linear-gradient(90deg, #a855f7, #ff006e)"
            delay={0.7}
          />
        </div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Senior Frontend Developer • React • WebGL • Motion Design
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <button className="glow-btn" onClick={scrollToProjects}>
            <span>View Projects</span>
            <span className="btn-arrow">→</span>
          </button>
          <button className="btn-ghost" onClick={() => window.location.href = '#contact'}>
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Плавающие орбы */}
      <div className="floating-orbs">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`orb orb-${i}`}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </section>
  );
};
