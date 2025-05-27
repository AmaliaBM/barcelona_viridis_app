import Carousel from 'react-bootstrap/Carousel';

function CustomCarousel({ vegetation }) {
  if (!vegetation || vegetation.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
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
            src={item.img}
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CustomCarousel;

