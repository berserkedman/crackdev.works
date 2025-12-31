import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; // ДОБАВЛЕНО
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import './ProjectPage.css';

export const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useProjects();
  
  // ИСПРАВЛЕНО: скролл вверх при открытии страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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
          Назад к проектам
        </button>

        <div className="project-header">
          <span className="project-category-badge">{project.category}</span>
          <h1 className="project-page-title">{project.title}</h1>
          <p className="project-page-subtitle">{project.description}</p>
        </div>

        {project.imageUrl && (
          <div className="project-image-wrapper">
            <img src={project.imageUrl} alt={project.title} />
          </div>
        )}

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
                <span key={i} className="tech-tag">
                  {tag}
                </span>
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
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Посмотреть проект
                  <ExternalLink size={18} />
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
