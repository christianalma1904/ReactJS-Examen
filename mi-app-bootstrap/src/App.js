import React from 'react';
import AppNavbar from './components/Navbar';
import Welcome from './components/Welcome';
import CarouselSection from './components/CarouselSection';
import Features from './components/Features';
import Alerts from './components/Alerts';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <AppNavbar />
      <Container>
        <Welcome />
        <CarouselSection />
        <Features />
        <Alerts />
      </Container>
      <Footer />
    </>
  );
}

export default App;
