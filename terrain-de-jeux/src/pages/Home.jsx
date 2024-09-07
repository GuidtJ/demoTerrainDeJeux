import React from 'react';
import AnimatedText from '../components/AnimatedText';
import Concept from '../components/Concept';
import WhyRent from '../components/WhyRent';
import CarouselComponent from '../components/Carousel';

function Home() {
  return (
    <div>
      <AnimatedText />
      <Concept />
      <WhyRent />
      <CarouselComponent />
      <hr />
    </div>
  );
}

export default Home;