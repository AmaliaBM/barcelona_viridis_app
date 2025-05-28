import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function VegetationCategoryPage() {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://barcelona-viridis-server.onrender.com/vegetation')
      .then((res) => res.json())
      .then((data) => {
        // Filtrar por categoría
        const filtered = data.filter((item) => item.category === category);
        setItems(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error loading data');
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p>Cargando vegetación...</p>;
  if (error) return <p className="text-danger">{error}</p>;
  if (items.length === 0) return <p>No se encontraron resultados para "{category}".</p>;

  return (
    <div className="d-flex flex-wrap justify-content-start" style={{ padding: '1rem' }}>
      {items.map((item) => (
        <Card key={item.id} style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img
            variant="top"
            src={item.image || "https://via.placeholder.com/286x180?text=No+Image"}
            alt={item.name}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default VegetationCategoryPage;
