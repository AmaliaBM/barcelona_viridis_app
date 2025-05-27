import "./PlaceListPage.css";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function PlaceListPage() { //props quitados temporalmente para poner ejemplos falsos y ver algo en el enrutamiento.
  const placesList = [
    {
      name: "Ejemplo 1",
      description: "Barrio encantador con plazas y ambiente bohemio.",
      image: "https://via.placeholder.com/286x180?text=Gracia",
      attributes: ["Céntrico", "Cultural", "Comida local"]
    },
    {
      name: "Ejemplo 2",
      description: "Famoso por su arquitectura modernista.",
      image: "https://via.placeholder.com/286x180?text=Eixample",
      attributes: ["Modernista", "Avinguda Diagonal", "Comercial"]
    },
    {
      name: "Ejemplo 3",
      description: "Famoso por su arquitectura modernista.",
      image: "https://via.placeholder.com/286x180?text=Eixample",
      attributes: ["Modernista", "Avinguda Diagonal", "Comercial"]
    },
    {
      name: "Ejemplo 4",
      description: "Famoso por su arquitectura modernista.",
      image: "https://via.placeholder.com/286x180?text=Eixample",
      attributes: ["Modernista", "Avinguda Diagonal", "Comercial"]
    },
        {
      name: "Ejemplo 5",
      description: "Famoso por su arquitectura modernista.",
      image: "https://via.placeholder.com/286x180?text=Eixample",
      attributes: ["Modernista", "Avinguda Diagonal", "Comercial"]
    }
    // Puedes añadir más barrios aquí...
];
    return (
    <div id="PlaceList" className="d-flex flex-wrap justify-content-start">
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
  

export default PlaceListPage;
