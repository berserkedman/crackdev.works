import { motion } from 'framer-motion';
import { SkillsOrbit } from './SkillsOrbit';
import './AboutSection.css';

export const AboutSection = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Technologies', value: '20+' }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-title gradient-text">About Me</h2>
          <div className="about-text">
            <p>
              I'm a passionate <strong>Frontend Developer</strong> specializing in creating 
              stunning, high-performance web experiences. With expertise in modern frameworks 
              and a keen eye for design, I transform ideas into pixel-perfect reality.
            </p>
            <p>
              My approach combines cutting-edge technology with creative problem-solving. 
              I believe great interfaces should not only look beautiful but also provide 
              seamless user experiences that drive results.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new web technologies, 
              contributing to open-source projects, or designing innovative UI concepts.
            </p>
          </div>

          {/* Статистика */}
          <div className="about-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="glow-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'resume.pdf';
              link.click();
            }}
          >
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SkillsOrbit />
        </motion.div>
      </div>
    </section>
  );
};
