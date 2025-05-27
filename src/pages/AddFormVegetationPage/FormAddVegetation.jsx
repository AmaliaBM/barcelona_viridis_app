import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormAddVegetation.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormAddVegetation({ setVegetationList }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleAddVegetation = (event) => {
    event.preventDefault();

    const newVegetation = {
      name,
      latinName,
      category,
      description,
      image: image || "/error404.avif",
      id: String(Math.floor(Math.random() * 10000000)),
    };

    setVegetationList((currentList) => [...currentList, newVegetation]);
    navigate("/");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="addvegetation" className="container mt-4">
      <div className="FormAddVegetationPage">
      <Form onSubmit={handleAddVegetation}>
        <h2 className="mb-4">Add Vegetation</h2>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Vegetation Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g. Almez"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLatinName">
          <Form.Label>Latin Name</Form.Label>
          <Form.Control
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
            required
            placeholder="e.g. Celtis australis"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="green area">Green Area</option>
            <option value="tree">Tree</option>
            <option value="bush">Bush</option>
            <option value="plant">Plant</option>
            <option value="flower">Flower</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Add a short description..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Upload an Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
        </Form.Group>

        {image && (
          <div className="mb-3 text-center">
            <p>Preview:</p>
            <img
              src={image}
              alt="Vegetation Preview"
              style={{ maxWidth: "300px", maxHeight: "200px", borderRadius: "8px" }}
            />
          </div>
        )}

        <div className="text-end">
          <Button variant="primary" type="submit">
            Add Vegetation
          </Button>
        </div>
      </Form>
    </div></div>
  );
}

export default FormAddVegetation;
