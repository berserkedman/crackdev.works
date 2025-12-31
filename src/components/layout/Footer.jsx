import { MessageCircle, Github } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Тимур</h3>
            <p>Python-разработчик • Автоматизация & Telegram-боты</p>
          </div>

          <div className="footer-links">
            <a 
              href="https://t.me/neffixlab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <MessageCircle size={18} />
              <span>Telegram</span>
            </a>
            <a 
              href="https://kwork.ru/user/neffixlab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <span>Kwork</span>
            </a>
            <a 
              href="https://t.me/neffixlab_reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              <span>Отзывы</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};
