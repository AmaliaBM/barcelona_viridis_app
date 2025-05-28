import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function ArticleDetailPage({ articles }) {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p>Artículo no encontrado.</p>;
  }

  return (
    <Card>
      <Card.Img variant="top" src={article.image || "https://via.placeholder.com/600x300"} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.text || article.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ArticleDetailPage;
