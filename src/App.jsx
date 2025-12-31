import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { ThemeToggle } from './components/layout/ThemeToggle';
import { Footer } from './components/layout/Footer';
import { BackgroundEffect } from './components/effects/BackgroundEffect';
import { HeroSection } from './components/home/HeroSection';
import { ProjectsGrid } from './components/home/ProjectsGrid';
import { AboutSection } from './components/home/AboutSection';
import { ProjectPage } from './components/project/ProjectPage';
import { AdminPanel } from './components/admin/AdminPanel';
import './styles/global.css';
import './styles/theme.css';

const HomePage = () => (
  <>
    <HeroSection />
    <ProjectsGrid />
    <AboutSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <BackgroundEffect />
        <Navigation />
        <ThemeToggle />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        
        <Footer />
        <AdminPanel />
      </div>
    </Router>
  );
}

export default App;
