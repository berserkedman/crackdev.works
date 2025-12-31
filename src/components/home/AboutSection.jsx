import { MessageCircle } from 'lucide-react';
import './AboutSection.css';

export const AboutSection = () => {
  const skills = [
    'Python', 'Aiogram', 'Selenium', 'BeautifulSoup',
    'SQLite', 'PostgreSQL', 'JavaScript', 'API Integration'
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-title">Обо мне</h2>
            <div className="about-text">
              <p>
                Занимаюсь разработкой <strong>Telegram-ботов</strong> и <strong>автоматизацией бизнес-процессов</strong>. 
                Помогаю компаниям экономить время и ресурсы, автоматизируя рутинные задачи.
              </p>
              <p>
                Специализируюсь на создании решений под ключ: от простых ботов для приёма заказов 
                до сложных систем с интеграцией CRM, базами данных и внешними API.
              </p>
              <p>
                Работаю по чёткому тех. заданию, всегда на связи в процессе разработки. 
                Код пишу чисто, с комментариями и документацией.
              </p>
            </div>

            <div className="about-actions">
              <a 
                href="https://t.me/neffixlab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={18} />
                <span>Обсудить проект</span>
              </a>
              <a 
                href="https://t.me/neffixlab_reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>Посмотреть отзывы</span>
              </a>
            </div>
          </div>

          <div className="about-skills">
            <h3>Технологии</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="skill-item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
