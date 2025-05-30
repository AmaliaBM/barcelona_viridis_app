import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ArticleDetailPage({ articles }) {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p>Artículo no encontrado.</p>;
  }

  // Para evitar errores si no hay texto
  const content = article.text || article.content || "";

  return (
    <div className="page-content">
    <Card>
      <Card.Img variant="top" src={article.image || "https://via.placeholder.com/600x300"} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <div>
          {content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="article-paragraph">{paragraph}</p>
          ))}
        </div>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ArticleDetailPage;
