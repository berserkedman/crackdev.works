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
      <BackgroundEffect />
      <Navigation />
      <ThemeToggle />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
