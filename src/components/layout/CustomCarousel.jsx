import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import './CustomCarousel.css';

function CustomCarousel({ vegetation }) {
  if (!vegetation || vegetation.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Spinner animation="border" role="status" />
        <h5>...Loading carrusel...</h5>
      </div>
    );
  }

  return (
    <Carousel>
      {vegetation.map((item) => (
        <Carousel.Item key={item.id}>
          <div className="carousel-image-wrapper">
            <img
              className="carousel-image"
              src={item.image}
              alt={item.name}
            />
          </div>
          <div className="carousel-title">
            <h3>{item.name}</h3>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
