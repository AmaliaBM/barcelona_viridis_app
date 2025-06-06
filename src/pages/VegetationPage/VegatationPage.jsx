import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function VegetationPage({ vegetationList }) {
  return (
    <div className="VegetationPage" style={{ padding: "1rem" }}>
      <Row xs={1} md={2} lg={3} className="g-4">
        {vegetationList.map((veg) => (
          <Col key={veg.id}>
            <Card className="veg-card">
              <Card.Img 
                variant="top" 
                src={veg.image} 
                alt={veg.name} 
                className="veg-card-img"
              />
              <Card.Body>
                <Card.Title>{veg.name}</Card.Title>
                <Card.Text>
                    {veg.description.length > 150  ? veg.description.slice(0, 150) + "..."  : veg.description}
                </Card.Text>

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
