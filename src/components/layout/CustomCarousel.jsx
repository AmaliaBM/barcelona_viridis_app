import Carousel from 'react-bootstrap/Carousel';
import Spinner from 'react-bootstrap/Spinner';
import './CustomCarousel.css'; // Asegúrate de tener los estilos aplicados

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
          <div className="carousel-image-wrapper">
            <img
              className="carousel-image"
              src={item.image || "https://via.placeholder.com/800x400?text=Sin+imagen"}
              alt={item.name}
            />
          </div>
          <div className="carousel-caption-wrapper">
            <h3>{item.name}</h3>
            <p>{item.category}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;
