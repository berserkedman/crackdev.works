import { motion } from 'framer-motion';
import { useState } from 'react';
import { useProjects } from '../../hooks/useProjects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import './ProjectGrid.css';

export const ProjectGrid = () => {
  const { projects, loading } = useProjects();
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  if (loading) {
    return (
      <div className="projects-loading">
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p>Loading projects...</p>
      </div>
    );
  }

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of my best work in web development and design
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard 
                project={project}
                isHovered={hoveredId === project.id}
                onHover={() => setHoveredId(project.id)}
                onLeave={() => setHoveredId(null)}
                onClick={setSelectedProject}
              />
            </motion.div>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="no-projects">
            <p>No projects yet. Add your first project via Admin Panel!</p>
          </div>
        )}
      </div>

      {/* Модальное окно с деталями проекта */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
