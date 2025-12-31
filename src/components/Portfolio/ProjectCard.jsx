import { motion } from 'framer-motion';
import { useState } from 'react';
import './ProjectCard.css';

export const ProjectCard = ({ project, onHover, onLeave, onClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className="project-card"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onMouseMove={handleMouseMove}
      onClick={() => onClick(project)}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient следует за курсором */}
      <div
        className="card-glow"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 212, 255, 0.2), transparent)`,
        }}
      />

      {/* Изображение проекта */}
      <div className="card-image-wrapper">
        <img 
          src={project.image} 
          alt={project.title}
          className="card-image"
        />
        <div className="card-overlay">
          <span className="view-project">View Project →</span>
        </div>
      </div>

      {/* Контент карточки */}
      <div className="card-content">
        <div className="card-category">{project.category}</div>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        
        {/* Теги технологий */}
        <div className="card-tags">
          {project.tags?.slice(0, 3).map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
          {project.tags?.length > 3 && (
            <span className="tag">+{project.tags.length - 3}</span>
          )}
        </div>
      </div>

      {/* Анимированная рамка */}
      <div className="card-border" />
    </motion.div>
  );
};
