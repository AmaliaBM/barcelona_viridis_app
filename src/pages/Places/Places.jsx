import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Places.css";

function Places() {
  return (
    <div id="Places" className="d-flex flex-wrap justify-content-start">
      {placesList.map((place, index) => (
        <Card key={index} style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" src={place.image} />
          <Card.Body>
            <Card.Title>{place.name}</Card.Title>
            <Card.Text>{place.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {place.attributes.map((attr, idx) => (
              <ListGroup.Item key={idx}>{attr}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      ))}
    </div>
  );
}

export default Places;

