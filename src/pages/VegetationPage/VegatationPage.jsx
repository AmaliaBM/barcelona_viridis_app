import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function VegetationPage({ vegetationList }) {
  return (
    <div id="VegetationPage" style={{ padding: "1rem" }}>
      <Row xs={1} md={2} lg={3} className="g-4">
        {vegetationList.map((veg) => (
          <Col key={veg.id}>
            <Card>
              <Card.Img 
                variant="top" 
                src={veg.image || "https://via.placeholder.com/300x160?text=Sin+imagen"} 
                alt={veg.name} 
              />
              <Card.Body>
                <Card.Title>{veg.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{veg.category}</Card.Subtitle>
                <Card.Text>{veg.description}</Card.Text>

                <Link 
                  to={`/vegetation/${veg.id}`} 
                  className="btn btn-primary"
                >
                  More Information
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default VegetationPage;
