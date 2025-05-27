import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./EditVegetationPage.css";

function EditVegetationPage({ vegetationList, setVegetationList }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const vegetation = vegetationList.find((v) => v.id === parseInt(id));

  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (vegetation) {
      setName(vegetation.name);
      setLatinName(vegetation.latinName);
      setCategory(vegetation.category);
      setDescription(vegetation.description);
      setImage(vegetation.image);
    }
  }, [vegetation]);

  const isValidImageUrl = (url) => {
    return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !category || !description.trim()) {
      setError("Name, category, and description are required.");
      return;
    }

    if (image && !isValidImageUrl(image)) {
      setError("Please enter a valid image URL ending in .jpg, .png, etc.");
      return;
    }

    const updated = {
      ...vegetation,
      name,
      latinName,
      category,
      description,
      image: image || "/default-image.png",
    };

    const newList = vegetationList.map((v) =>
      v.id === updated.id ? updated : v
    );
    setVegetationList(newList);
    navigate(`/vegetation/${id}`);
  };

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this card?");
    if (confirm) {
      const filtered = vegetationList.filter((v) => v.id !== vegetation.id);
      setVegetationList(filtered);
      navigate("/vegetation");
    }
  };

  if (!vegetation) return <h3>Vegetation not found</h3>;

  return (
    <div className="edit-page-container">
      <h1>Edit Vegetation</h1>

      {error && (
        <Alert variant="danger" className="mb-3">
          {error}
        </Alert>
      )}

      <Card style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
        <Card.Img
          variant="top"
          src={isValidImageUrl(image) ? image : "/default-image.png"}
          alt="Vegetation Preview"
        />
        <Card.Body>
          <Card.Title>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Vegetation name"
              required
            />
          </Card.Title>
          <Card.Text>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Latin Name:
            <input
              type="text"
              className="form-control mt-1"
              value={latinName}
              onChange={(e) => setLatinName(e.target.value)}
              placeholder="Latin name"
            />
          </ListGroup.Item>
          <ListGroup.Item>
            Category:
            <select
              className="form-control mt-1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select one option</option>
              <option value="green area">Green Area</option>
              <option value="tree">Tree</option>
              <option value="bush">Bush</option>
              <option value="plant">Plant</option>
              <option value="flower">Flower</option>
            </select>
          </ListGroup.Item>
          <ListGroup.Item>
            Image URL:
            <input
              type="url"
              className="form-control mt-1"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </ListGroup.Item>
        </ListGroup>
        <Card.Body className="d-flex justify-content-between">
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default EditVegetationPage;
