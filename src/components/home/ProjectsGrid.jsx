import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import './ProjectsGrid.css';

export const ProjectsGrid = () => {
  const { projects, loading } = useProjects();
  const navigate = useNavigate();

  if (loading) {
    return (
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="projects-loading">
            <div className="loading-spinner"></div>
            <p>Загрузка проектов...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Избранные проекты</h2>
          <p className="section-subtitle">
            Реализованные решения для бизнеса и автоматизации
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className="project-card"
              onClick={() => navigate(`/project/${project.id}`)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="project-tag">+{project.tags.length - 3}</span>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="no-projects">
            <p>Проекты скоро появятся. Добавьте их через админ-панель!</p>
          </div>
        )}
      </div>
    </section>
  );
};
