import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const Carousel = styled.div`
  position: relative;
  width: 100%;
`
const Gallery = styled.div`
  width: 100%;
  overflow: hidden;
`

function CarouselComponent({ children, length, controls }) {
  const [position, setPosition] = useState(0)
  const [width] = useState(() => 350 + ((length - 1) * 30 / length) + 2) // ширина картинки
  const [count, setCount] = useState(3) // видимое количество изображений
  const gallerydRef = useCallback(node => {
    if (node !== null) {
      setCount(node.offsetWidth / width);
    }
  }, [width]);

  function back() {
    let margin = position + (width * count);
    margin = Math.min(margin, 0);
    setPosition(margin);
  }
  function next() {
    let margin = position - (width * count);
    margin = Math.max(margin, -width * (length - count));
    setPosition(margin);
  }
  return (
    <Carousel>
      <Gallery ref={gallerydRef}>
        {children(position)}
      </Gallery>
      {controls(back, next)}
    </Carousel>
  );
}

export default CarouselComponent;