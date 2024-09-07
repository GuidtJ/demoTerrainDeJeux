import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent() {
  return (
    <div className="carou container d-flex justify-content-center mt-5">
      <div className="col-sm-4">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="/img/logo.png" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/img/logo2.png" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="/img/logo3.png" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselComponent;