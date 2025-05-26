import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function CustomCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.vegetation && props.vegetation.map((eachVegetation, i) => (
        <Carousel.Item key={i}>
          <img src={eachVegetation.img} alt={eachVegetation.title} />
          <Carousel.Caption>
            <h3>{eachVegetation.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;