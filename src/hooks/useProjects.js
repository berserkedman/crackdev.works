import { useState, useEffect } from 'react';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = () => {
      try {
        const stored = localStorage.getItem('portfolio-projects');
        
        if (stored) {
          setProjects(JSON.parse(stored));
          setLoading(false);
        } else {
          fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
              setProjects(data);
              localStorage.setItem('portfolio-projects', JSON.stringify(data));
              setLoading(false);
            })
            .catch(err => {
              console.error('Ошибка загрузки проектов:', err);
              setProjects([]);
              setLoading(false);
            });
        }
      } catch (error) {
        console.error('Ошибка парсинга:', error);
        setProjects([]);
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  useEffect(() => {
    if (projects.length > 0 && !loading) {
      localStorage.setItem('portfolio-projects', JSON.stringify(projects));
    }
  }, [projects, loading]);

  const addProject = (newProject) => {
    const project = {
      ...newProject,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setProjects(prev => [project, ...prev]);
    return project;
  };

  const updateProject = (id, updates) => {
    setProjects(prev => prev.map(p => 
      p.id === id ? { ...p, ...updates, updatedAt: new Date().toISOString() } : p
    ));
  };

  const deleteProject = (id) => {
    if (window.confirm('Удалить этот проект?')) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  return { 
    projects, 
    loading, 
    addProject, 
    updateProject, 
    deleteProject 
  };
};
