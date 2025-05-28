
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PlaceCard({ place }) {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={place.image || "https://via.placeholder.com/286x180"} />
      <Card.Body>
        <Card.Title>{place.name}</Card.Title>
        <Card.Text>
          {place.description || "Descripción no disponible."}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {place.attributes && place.attributes.map((attr, idx) => (
          <ListGroup.Item key={idx}>{attr}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

export default PlaceCard;
