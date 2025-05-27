import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./PlaceListPage.css";

function PlaceListPage({ placesList }) {
  return (
    <div id="PlaceList" className="d-flex flex-wrap justify-content-start">
      {placesList.map((place) => (
        <Card key={place.id} style={{ width: "18rem", margin: "1rem" }}>
          <Card.Img
            variant="top"
            src={place.image || "https://via.placeholder.com/286x180?text=No+Image"}
            alt={place.name}
          />
          <Card.Body>
            <Card.Title>{place.name}</Card.Title>
            <Card.Text>{place.description}</Card.Text>
          </Card.Body>

          <ListGroup className="list-group-flush">
            <ListGroup.Item>ID: {place.id}</ListGroup.Item>
            <ListGroup.Item>Zona: Gràcia</ListGroup.Item>
          </ListGroup>

          <Card.Body>
            <Link to={`/places/${place.id}`} className="btn btn-outline-primary w-100">
              More info
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PlaceListPage;

