import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Определяем активную секцию на основе скролла
      const sections = ['home', 'projects', 'about'];
      let currentSection = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Если секция видна в верхней половине экрана
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Вызываем сразу
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // ИСПРАВЛЕНО: обработчик для кнопки "Главная"
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // Если на главной странице - скроллим к началу
      scrollToSection('home');
    } else {
      // Если на другой странице - переходим на главную
      navigate('/');
      setIsMobileMenuOpen(false);
    }
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link 
          to="/" 
          className="nav-logo"
          onClick={() => setActiveSection('home')}
        >
          Тимур
        </Link>

        <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          {isHomePage ? (
            <>
              <button
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Главная
              </button>
              <button
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => scrollToSection('projects')}
              >
                Проекты
              </button>
              <button
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                Обо мне
              </button>
            </>
          ) : (
            <>
              <button
                className="nav-link"
                onClick={handleHomeClick}
              >
                Главная
              </button>
              <Link 
                to="/" 
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Проекты
              </Link>
              <Link 
                to="/" 
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Обо мне
              </Link>
            </>
          )}

          <a 
            href="https://t.me/neffixlab_reviews" 
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Отзывы
          </a>
          <a 
            href="https://t.me/neffixlab" 
            className="btn btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Написать
          </a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};
