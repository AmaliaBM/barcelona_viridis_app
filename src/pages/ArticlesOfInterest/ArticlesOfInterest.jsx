// src/pages/ArticlesOfInterest/ArticlesOfInterest.jsx

import "./ArticlesOfInterest.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Ejemplo primer artículo",
    content: "Contenido completo del primer artículo con texto de ejemplo.",
    image: "https://via.placeholder.com/300x150"
  },
  {
    id: 2,
    title: "Ejemplo segundo artículo",
    content: "Contenido completo del segundo artículo con texto de ejemplo.",
    image: "https://via.placeholder.com/300x150"
  }
];

function ArticlesOfInterest() {
  return (
    <>
      {articles.map((article) => (
        <Card key={article.id} className="mb-3">
          <Card.Img variant="top" src={article.image} />
          <Card.Body>
            <Card.Title>
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default ArticlesOfInterest;
