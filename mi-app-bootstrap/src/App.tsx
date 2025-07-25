import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Welcome from './components/Welcome';
import Features from './components/Features';
import Alerts from './components/Alerts';
import Footer from './components/Footer';
import Usuarios from './components/Usuarios';
import Sueldo from './components/Sueldo';
import Bono from './components/Bono';
import Registro from './components/Registro';
import CarouselSection from './components/CarouselSection';

const App: React.FC = () => {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Welcome />
              <CarouselSection />
              <Features />
              <Alerts />
            </>
          }
        />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/sueldo" element={<Sueldo />} />
        <Route path="/bono" element={<Bono />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
