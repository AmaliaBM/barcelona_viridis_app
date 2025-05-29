import { useParams, useNavigate, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "./PlaceDetailsPage.css";

function PlaceDetailsPage({ placesList, vegetationList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = placesList.find((eachPlace) => eachPlace.id === parseInt(id));

  if (!place) {
    return <h3 className="text-center mt-4">Oh sorry, place not found💐</h3>;
  }

  const relatedVegetation = vegetationList.filter(
    (veg) => veg.placeId === parseInt(id)
  );

  return (
    <Container className="py-4 PlaceDetailsPage">
      <Card className="mb-4 shadow-sm">
        <Card.Img variant="top" src={place.image} alt={place.name} />
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{place.district}</Card.Subtitle>
          <Card.Text>{place.description}</Card.Text>
        </Card.Body>
      </Card>

      {place.extraInfo && (
        <Card className="shadow-sm mb-4">
          <Card.Body>
            <Card.Text>{place.extraInfo}</Card.Text>
          </Card.Body>
          {place.extraImage && (
            <Card.Img variant="bottom" src={place.extraImage} alt="Extra visual" />
          )}
        </Card>
      )}

      {/* CARRUSEL de vegetación */}
      {relatedVegetation.length > 0 && (
        <>
          <h4 className="text-center mb-3">🍀Vegetation in this area🌼</h4>
          <Carousel className="mb-5">
            {relatedVegetation.map((veg) => (
              <Carousel.Item key={veg.id}>
                <Link to={`/vegetation/${veg.id}`}>
                  <img
                    className="d-block w-100"
                    src={veg.image || ""}
                    alt={veg.name}
                    style={{ maxHeight: "400px", objectFit: "cover", cursor: "pointer" }}
                  />
                  <Carousel.Caption>
                    <h5>{veg.name}</h5>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      )}

      <div className="text-center">
        <Button variant="secondary" onClick={() => navigate("/places")}>
          ← Back to list
        </Button>
      </div>
    </Container>
  );
}

export default PlaceDetailsPage;

