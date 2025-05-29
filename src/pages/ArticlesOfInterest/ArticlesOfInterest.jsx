

import "./ArticlesOfInterest.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ArticlesOfInterest() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://barcelona-viridis-server.onrender.com/article")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setError("Could not load articles. Please try again later.");
      });
  }, []);

  if (error) return <p className="text-danger">{error}</p>;

  return (
    <>
      {articles.map((article) => (
        <Card key={article.id} className="mb-3">
          <Card.Img
            variant="top"
            src={article.image}
            alt={article.title}
          />
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

