import { useParams, useNavigate, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './VegetationDetailsPage.css';

function VegetationDetailsPage({ vegetationList, setVegetationList }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Buscar la vegetación con el id recibido por URL
  const vegetation = vegetationList.find((each) => each.id === Number(id));

  const handleDelete = () => {
    const updatedList = vegetationList.filter((each) => each.id !== Number(id));
    setVegetationList(updatedList);
    navigate("/vegetation"); // Volver al listado
  };

  if (!vegetation) {
    return <h3 style={{ textAlign: "center", marginTop: "2rem" }}>🌱 Vegetación no encontrada</h3>;
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="VegetationDetailsPage">
        <Card style={{ width: '22rem' }}>
          <Card.Img
            variant="top"
            src={vegetation.image || "https://via.placeholder.com/300x180?text=Sin+imagen"}
            alt={vegetation.name}
          />
          <Card.Body>
            <Card.Title>{vegetation.name}</Card.Title>
            <Card.Text>{vegetation.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><strong>Latin Name:</strong> {vegetation.latinName}</ListGroup.Item>
            <ListGroup.Item><strong>Category:</strong> {vegetation.category}</ListGroup.Item>
          </ListGroup>
          <Card.Body className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => navigate("/vegetation")}>
              Cancel
            </Button>
            <Link to={`/vegetation/${vegetation.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default VegetationDetailsPage;
