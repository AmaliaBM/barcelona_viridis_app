import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
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

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !category || !description.trim()) {
      setError("Name, category, and description are required.");
      return;
    }

    const updatedVegetation = {
      name: name.trim(),
      latinName: latinName.trim(),
      category,
      description: description.trim(),
      image: image || "/default-image.png",
    };

    try {
      // PUT request para actualizar la vegetación en el backend
      const response = await axios.put(
        `https://barcelona-viridis-server.onrender.com/vegetation/${id}`,
        updatedVegetation
      );

      const updatedFromServer = response.data;

      // Actualizamos la lista local con la respuesta del servidor
      const newList = vegetationList.map((v) =>
        v.id === updatedFromServer.id ? updatedFromServer : v
      );
      setVegetationList(newList);

      navigate(`/vegetation/${id}`);
    } catch (err) {
      console.error("Error updating vegetation:", err);
      setError("Error updating vegetation. Please try again later.");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");
    if (!confirmDelete) return;

    try {
      // DELETE request al backend
      await axios.delete(`https://barcelona-viridis-server.onrender.com/vegetation/${id}`);

      // Actualizamos la lista local quitando el elemento eliminado
      const filtered = vegetationList.filter((v) => v.id !== vegetation.id);
      setVegetationList(filtered);

      navigate("/vegetation");
    } catch (err) {
      console.error("Error deleting vegetation:", err);
      setError("Error deleting vegetation. Please try again later.");
    }
  };

  if (!vegetation) return <h3 className="text-center mt-4">🍁Vegetation not found🍂</h3>;

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
              <option value="">↓↓ Select one option ↓↓</option>
              <option value="green area">Green Area</option>
              <option value="tree">Tree🌲</option>
              <option value="bush">Bush🌿</option>
              <option value="green_area">Green Area 🏞️🌳</option>
              <option value="flower">Flower🌸</option>
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
            <Button className="btn-delete-pastel" onClick={handleDelete}>
              ⛔Delete
            </Button>
            <Button variant="success" type="submit">
              Save✅
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EditVegetationPage;
