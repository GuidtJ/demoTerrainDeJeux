import React, { useEffect, useRef } from 'react';

const AnimatedText = () => {
  const textRef = useRef(null);
  const text = 'Louer pour créer votre espace de jeux';

  const createLetterArray = (string) => string.split('');

  const createLetterLayers = (array) => {
    return array.map((letter) => {
      let layer = '';
      for (let i = 1; i <= 2; i++) {
        if (letter === ' ') {
          layer += '<span class="space"></span>';
        } else {
          layer += `<span class="letter-${i}">${letter}</span>`;
        }
      }
      return layer;
    });
  };

  const createLetterContainers = (array) => {
    return array.map((item) => `<div class="wrapper">${item}</div>`);
  };

  useEffect(() => {
    if (textRef.current) {
      const outputLayers = new Promise((resolve) => {
        textRef.current.innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text))).join('');
        resolve();
      });

      outputLayers.then(() => {
        const spans = Array.from(textRef.current.getElementsByTagName('span'));
        spans.forEach((span) => {
          setTimeout(() => {
            span.parentElement.style.width = `${span.offsetWidth}px`;
            span.parentElement.style.height = `${span.offsetHeight}px`;
          }, 250);
        });

        return spans;
      }).then((spans) => {
        let time = 250;
        spans.forEach((span) => {
          time += 15;
          setTimeout(() => {
            span.parentElement.style.top = '0px';
          }, time);
        });
      });
    }
  }, []);

  return <div id="text" ref={textRef}></div>;
};

export default AnimatedText;
