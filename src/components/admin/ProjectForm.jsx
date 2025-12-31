import { useState, useEffect } from 'react';
import './ProjectForm.css';

export const ProjectForm = ({ onSubmit, initialData, onCancel }) => {
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

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        tags: initialData.tags?.join(', ') || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Преобразуем теги из строки в массив
    const projectData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
    };

    onSubmit(projectData);

    // Очищаем форму если это не редактирование
    if (!initialData) {
      setFormData({
        title: '',
        description: '',
        fullDescription: '',
        category: '',
        image: '',
        tags: '',
        liveUrl: '',
        githubUrl: ''
      });
    }
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Project Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="My Awesome Project"
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Category *</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Web Development, Design, etc."
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Short Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Brief description for the card..."
          required
          rows="3"
          className="form-textarea"
        />
      </div>

      <div className="form-group">
        <label>Full Description</label>
        <textarea
          name="fullDescription"
          value={formData.fullDescription}
          onChange={handleChange}
          placeholder="Detailed description for the project page..."
          rows="5"
          className="form-textarea"
        />
      </div>

      <div className="form-group">
        <label>Image URL *</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          required
          className="form-input"
        />
        {formData.image && (
          <div className="image-preview">
            <img src={formData.image} alt="Preview" />
          </div>
        )}
      </div>

      <div className="form-group">
        <label>Technologies (comma separated) *</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="React, TypeScript, Tailwind CSS"
          required
          className="form-input"
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Live URL</label>
          <input
            type="url"
            name="liveUrl"
            value={formData.liveUrl}
            onChange={handleChange}
            placeholder="https://project-demo.com"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>GitHub URL</label>
          <input
            type="url"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
            placeholder="https://github.com/..."
            className="form-input"
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="glow-btn">
          {initialData ? 'Update Project' : 'Add Project'}
        </button>
        {onCancel && (
          <button type="button" className="btn-ghost" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};
