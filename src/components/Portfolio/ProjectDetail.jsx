import { motion, AnimatePresence } from 'framer-motion';
import './ProjectDetail.css';

export const ProjectDetail = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="project-detail-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="project-detail-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Кнопка закрытия */}
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>

          {/* Изображение проекта */}
          <div className="detail-image-wrapper">
            <img src={project.image} alt={project.title} />
          </div>

          {/* Контент */}
          <div className="detail-content">
            <div className="detail-category">{project.category}</div>
            <h2 className="detail-title">{project.title}</h2>
            <p className="detail-description">{project.description}</p>

            {/* Полное описание */}
            {project.fullDescription && (
              <div className="detail-full-description">
                <p>{project.fullDescription}</p>
              </div>
            )}

            {/* Технологии */}
            <div className="detail-section">
              <h3>Technologies Used</h3>
              <div className="detail-tags">
                {project.tags?.map((tag, index) => (
                  <span key={index} className="detail-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Ссылки */}
            <div className="detail-links">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glow-btn"
                >
                  View Live →
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
