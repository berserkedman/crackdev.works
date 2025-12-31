import { ArrowRight, Github, MessageCircle } from 'lucide-react';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content fade-in-up">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>Доступен для проектов</span>
          </div>

          <h1 className="hero-title">
            Тимур, 23 года<br/>
            <span className="gradient-text">Python-разработчик</span>
          </h1>

          <p className="hero-subtitle">
            Автоматизация & Telegram-боты
          </p>

          <div className="hero-description">
            <p>
              Создаю <strong>функциональные решения</strong> для бизнеса:
            </p>
            <ul className="hero-list">
              <li>Telegram-боты любой сложности (приём заказов, CRM, рассылки)</li>
              <li>Автоматизация рутинных задач</li>
              <li>Парсинг данных и веб-скрейпинг</li>
              <li>Работа с API и базами данных</li>
            </ul>

            <div className="hero-tech">
              <p><strong>Технологии:</strong> Python, Aiogram, Selenium, BeautifulSoup, SQLite, PostgreSQL, JavaScript</p>
            </div>

            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>Быстрая разработка</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Чистый код</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💬</span>
                <span>Всегда на связи</span>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <a 
              href="https://t.me/neffixlab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={18} />
              <span>Написать в Telegram</span>
            </a>
            <a 
              href="https://kwork.ru/user/neffixlab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>Заказать на Kwork</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
