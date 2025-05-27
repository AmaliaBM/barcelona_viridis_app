import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';

function CustomCarousel({ vegetation }) {
  if (!vegetation || vegetation.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Spinner animation="border" role="status" />
        <h5>Cargando carrusel...</h5>
      </div>
    );
  }

  return (
    <Carousel>
      {vegetation.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.image || "https://via.placeholder.com/800x400?text=Sin+imagen"}
            alt={item.name}
          />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
