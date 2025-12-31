import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import './ProjectPage.css';

export const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useProjects();

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-not-found">
        <div className="container">
          <h2>Проект не найден</h2>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
          <span>Назад к проектам</span>
        </button>

        <div className="project-header">
          <div className="project-category-badge">{project.category}</div>
          <h1 className="project-page-title">{project.title}</h1>
          <p className="project-page-subtitle">{project.description}</p>
        </div>

        <div className="project-image-wrapper">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-details">
          {project.fullDescription && (
            <div className="project-section">
              <h2>Описание проекта</h2>
              <p>{project.fullDescription}</p>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="project-section">
              <h2>Технологии</h2>
              <div className="tech-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          )}

          {(project.liveUrl || project.githubUrl) && (
            <div className="project-section">
              <h2>Ссылки</h2>
              <div className="project-links">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <ExternalLink size={18} />
                    <span>Посмотреть проект</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
