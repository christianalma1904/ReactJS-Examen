import React from 'react';
import { Carousel } from 'react-bootstrap';
import imagen from '../assets/imagen.jpg'; // usa tu imagen aquí

function CarouselSection() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={imagen} alt="Vista montañosa" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;