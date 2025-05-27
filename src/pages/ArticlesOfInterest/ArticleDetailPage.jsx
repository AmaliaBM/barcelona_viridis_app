
// src/pages/ArticlesOfInterest/ArticleDetailPage.jsx

import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const articles = [
  {
    id: 1,
    title: "Ejemplo primer artículo",
    content: "Contenido completo del primer artículo con texto de ejemplo.",
    image: "https://via.placeholder.com/600x300"
  },
  {
    id: 2,
    title: "Ejemplo segundo artículo",
    content: "Contenido completo del segundo artículo con texto de ejemplo.",
    image: "https://via.placeholder.com/600x300"
  }
];

function ArticleDetailPage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p>Artículo no encontrado.</p>;
  }

  return (
    <Card>
      <Card.Img variant="top" src={article.image} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ArticleDetailPage;
