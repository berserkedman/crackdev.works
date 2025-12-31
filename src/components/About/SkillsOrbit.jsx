import { motion } from 'framer-motion';
import './SkillsOrbit.css';

export const SkillsOrbit = () => {
  const skills = {
    inner: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'JavaScript', icon: '⚡' }
    ],
    middle: [
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind', icon: '🎨' },
      { name: 'Framer', icon: '🎭' },
      { name: 'WebGL', icon: '🌐' }
    ],
    outer: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Git', icon: '📦' },
      { name: 'Figma', icon: '🎯' },
      { name: 'CSS', icon: '💅' }
    ]
  };

  return (
    <div className="skills-orbit">
      {/* Центр */}
      <motion.div
        className="orbit-center"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 40px rgba(0, 212, 255, 0.5)',
            '0 0 60px rgba(0, 212, 255, 0.8)',
            '0 0 40px rgba(0, 212, 255, 0.5)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="center-icon">👨‍💻</span>
      </motion.div>

      {/* Внутренняя орбита */}
      <div className="orbit orbit-inner">
        {skills.inner.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              rotate: 360 
            }}
            transition={{
              scale: { delay: index * 0.1 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `rotate(${(360 / skills.inner.length) * index}deg) translateX(120px) rotate(-${(360 / skills.inner.length) * index}deg)`
            }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Средняя орбита */}
      <div className="orbit orbit-middle">
        {skills.middle.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              rotate: -360 
            }}
            transition={{
              scale: { delay: 0.3 + index * 0.1 },
              rotate: { duration: 30, repeat: Infinity, ease: "linear" }
            }}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `rotate(${(360 / skills.middle.length) * index}deg) translateX(200px) rotate(-${(360 / skills.middle.length) * index}deg)`
            }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Внешняя орбита */}
      <div className="orbit orbit-outer">
        {skills.outer.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-item"
            initial={{ scale: 0 }}
            animate={{ 
              scale: 1,
              rotate: 360 
            }}
            transition={{
              scale: { delay: 0.6 + index * 0.1 },
              rotate: { duration: 40, repeat: Infinity, ease: "linear" }
            }}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: `rotate(${(360 / skills.outer.length) * index}deg) translateX(280px) rotate(-${(360 / skills.outer.length) * index}deg)`
            }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Орбитальные кольца */}
      <div className="orbit-ring orbit-ring-1" />
      <div className="orbit-ring orbit-ring-2" />
      <div className="orbit-ring orbit-ring-3" />
    </div>
  );
};
