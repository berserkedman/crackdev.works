import { useState, useEffect } from 'react';
import { Settings, X, Plus, Edit2, Trash2 } from 'lucide-react';
import { useProjects } from '../../hooks/useProjects';
import './AdminPanel.css';

export const AdminPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('projects'); // projects | bio
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fullDescription: '',
    category: '',
    image: '',
    tags: '',
    liveUrl: '',
    githubUrl: ''
  });

  const [bioData, setBioData] = useState({
    name: 'Тимур, 23 года',
    role: 'Python-разработчик',
    subtitle: 'Автоматизация & Telegram-боты',
    description: 'Создаю функциональные решения для бизнеса:',
    services: [
      'Telegram-боты любой сложности (приём заказов, CRM, рассылки)',
      'Автоматизация рутинных задач',
      'Парсинг данных и веб-скрейпинг',
      'Работа с API и базами данных'
    ],
    technologies: 'Python, Aiogram, Selenium, BeautifulSoup, SQLite, PostgreSQL, JavaScript'
  });

  const { projects, addProject, updateProject, deleteProject } = useProjects();

  // Загрузка биографии из localStorage
  useEffect(() => {
    const savedBio = localStorage.getItem('portfolio-bio');
    if (savedBio) {
      setBioData(JSON.parse(savedBio));
    }
  }, []);

  const saveBio = () => {
    localStorage.setItem('portfolio-bio', JSON.stringify(bioData));
    alert('Биография сохранена! Перезагрузите страницу чтобы увидеть изменения.');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean)
    };

    if (editingProject) {
      updateProject(editingProject.id, projectData);
      setEditingProject(null);
    } else {
      addProject(projectData);
    }

    setFormData({
      title: '', description: '', fullDescription: '',
      category: '', image: '', tags: '', liveUrl: '', githubUrl: ''
    });
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      ...project,
      tags: project.tags?.join(', ') || ''
    });
    setActiveTab('projects');
  };

  if (!isOpen) {
    return (
      <button className="admin-trigger glass" onClick={() => setIsOpen(true)}>
        <Settings size={20} />
      </button>
    );
  }

  return (
    <div className="admin-overlay" onClick={() => setIsOpen(false)}>
      <div className="admin-panel glass" onClick={(e) => e.stopPropagation()}>
        <div className="admin-header">
          <h2>Админ-панель</h2>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Табы */}
        <div className="admin-tabs">
          <button 
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Проекты
          </button>
          <button 
            className={`tab-btn ${activeTab === 'bio' ? 'active' : ''}`}
            onClick={() => setActiveTab('bio')}
          >
            Биография
          </button>
        </div>

        <div className="admin-content">
          {/* ПРОЕКТЫ */}
          {activeTab === 'projects' && (
            <>
              <div className="admin-section">
                <h3>{editingProject ? 'Редактировать' : 'Добавить'} проект</h3>
                <form className="project-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Название"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                    className="admin-input"
                  />
                  <input
                    type="text"
                    placeholder="Категория"
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    required
                    className="admin-input"
                  />
                  <textarea
                    placeholder="Краткое описание"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                    className="admin-textarea"
                    rows="3"
                  />
                  <textarea
                    placeholder="Полное описание"
                    value={formData.fullDescription}
                    onChange={(e) => setFormData({...formData, fullDescription: e.target.value})}
                    className="admin-textarea"
                    rows="5"
                  />
                  <input
                    type="url"
                    placeholder="URL изображения"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    required
                    className="admin-input"
                  />
                  <input
                    type="text"
                    placeholder="Технологии (через запятую)"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    className="admin-input"
                  />
                  <input
                    type="url"
                    placeholder="Ссылка на проект"
                    value={formData.liveUrl}
                    onChange={(e) => setFormData({...formData, liveUrl: e.target.value})}
                    className="admin-input"
                  />
                  <input
                    type="url"
                    placeholder="GitHub URL"
                    value={formData.githubUrl}
                    onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                    className="admin-input"
                  />
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      <Plus size={18} />
                      {editingProject ? 'Сохранить' : 'Добавить'}
                    </button>
                    {editingProject && (
                      <button 
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                          setEditingProject(null);
                          setFormData({
                            title: '', description: '', fullDescription: '',
                            category: '', image: '', tags: '', liveUrl: '', githubUrl: ''
                          });
                        }}
                      >
                        Отмена
                      </button>
                    )}
                  </div>
                </form>
              </div>

              <div className="admin-section">
                <h3>Проекты ({projects.length})</h3>
                <div className="projects-list">
                  {projects.map(project => (
                    <div key={project.id} className="project-item">
                      <img src={project.image} alt={project.title} />
                      <div className="project-info">
                        <h4>{project.title}</h4>
                        <p>{project.category}</p>
                      </div>
                      <div className="project-actions">
                        <button onClick={() => handleEdit(project)}>
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => deleteProject(project.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* БИОГРАФИЯ */}
          {activeTab === 'bio' && (
            <div className="admin-section">
              <h3>Редактировать биографию</h3>
              <div className="bio-form">
                <input
                  type="text"
                  placeholder="Имя и возраст"
                  value={bioData.name}
                  onChange={(e) => setBioData({...bioData, name: e.target.value})}
                  className="admin-input"
                />
                <input
                  type="text"
                  placeholder="Роль"
                  value={bioData.role}
                  onChange={(e) => setBioData({...bioData, role: e.target.value})}
                  className="admin-input"
                />
                <input
                  type="text"
                  placeholder="Подзаголовок"
                  value={bioData.subtitle}
                  onChange={(e) => setBioData({...bioData, subtitle: e.target.value})}
                  className="admin-input"
                />
                <textarea
                  placeholder="Описание"
                  value={bioData.description}
                  onChange={(e) => setBioData({...bioData, description: e.target.value})}
                  className="admin-textarea"
                  rows="2"
                />
                <textarea
                  placeholder="Технологии"
                  value={bioData.technologies}
                  onChange={(e) => setBioData({...bioData, technologies: e.target.value})}
                  className="admin-textarea"
                  rows="2"
                />
                
                <div style={{marginTop: '20px'}}>
                  <label style={{display: 'block', marginBottom: '10px', fontWeight: 600}}>
                    Услуги (по одной на строку):
                  </label>
                  <textarea
                    value={bioData.services.join('\n')}
                    onChange={(e) => setBioData({
                      ...bioData, 
                      services: e.target.value.split('\n').filter(s => s.trim())
                    })}
                    className="admin-textarea"
                    rows="6"
                  />
                </div>

                <button className="btn btn-primary" onClick={saveBio} style={{marginTop: '20px'}}>
                  Сохранить биографию
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
