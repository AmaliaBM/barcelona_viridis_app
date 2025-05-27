import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !category || !description.trim()) {
      setError("Name, category, and description are required.");
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
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");
    if (confirmDelete) {
      const filtered = vegetationList.filter((v) => v.id !== vegetation.id);
      setVegetationList(filtered);
      navigate("/vegetation");
    }
  };

  if (!vegetation) return <h3 className="text-center mt-4">Vegetation not found</h3>;

  return (
   
    <div className="edit-page-container container mt-4"> 
    <div className="EditVegetationPage">
      <h1 className="mb-4 text-center">Edit Vegetation</h1>

      {error && (
        <Alert variant="danger" className="mb-3">
          {error}
        </Alert>
      )}

      <Form onSubmit={handleSave}>
        <Form.Group className="mb-3">
          <Form.Label>Vegetation Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Latin Name</Form.Label>
          <Form.Control
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
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
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload New Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
        </Form.Group>

        {image && (
          <div className="mb-3 text-center">
            <p>Current Preview:</p>
            <img
              src={image}
              alt="Vegetation"
              style={{ maxWidth: "300px", maxHeight: "200px", borderRadius: "8px" }}
            />
          </div>
        )}

        <div className="d-flex justify-content-between">
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="success" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div></div>
  );
}

export default EditVegetationPage;
