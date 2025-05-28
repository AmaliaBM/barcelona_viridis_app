import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ThankYouModal from "./ThankYouModal"; // Asegúrate que el path es correcto

function FormAddVegetation({ setVegetationList }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleAddVegetation = async (e) => {
    e.preventDefault();

    if (!name.trim() || !category || !description.trim()) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const newVegetation = {
      name: name.trim(),
      latinName: latinName.trim(),
      category,
      description: description.trim(),
      image: image || "/error404.avif",
    };

    try {
      const response = await axios.post(
        "https://barcelona-viridis-server.onrender.com/vegetation",
        newVegetation
      );

      const createdVegetation = response.data;
      setVegetationList((prevList) => [...prevList, createdVegetation]);
      setShowModal(true);
    } catch (error) {
      console.error("Error al añadir vegetación:", error);
      alert("Error al añadir la vegetación. Intenta de nuevo más tarde.");
    }
  };

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const targetWidth = 640;
        const targetHeight = 320;

        const canvas = document.createElement("canvas");
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext("2d");

        // Fondo blanco por si hay transparencia
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, targetWidth, targetHeight);

        // Mantener proporción sin deformar
        const scale = Math.max(
          targetWidth / img.width,
          targetHeight / img.height
        );
        const x = (targetWidth - img.width * scale) / 2;
        const y = (targetHeight - img.height * scale) / 2;

        ctx.drawImage(
          img,
          x,
          y,
          img.width * scale,
          img.height * scale
        );

        // Comprimir ligeramente
        const resizedDataUrl = canvas.toDataURL("image/jpeg", 0.8);
        setImage(resizedDataUrl);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert("Por favor sube un archivo de imagen válido.");
  }
};

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <Form onSubmit={handleAddVegetation}>
        <h2 className="mb-4">Add Vegetation</h2>

        <Form.Group className="mb-3">
          <Form.Label>Vegetation Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            Don't worry if you don't know the exact name. You can write the name you know the plant by.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Latin Name</Form.Label>
          <Form.Control
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
          <Form.Text className="text-muted">This is not mandatory</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            You can enter the address where it's located here. We'll review the database and organize the content.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload an Image</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
          <Form.Text className="text-muted">
            Last but not least, we need you to add a photo of the vegetation you want to add.
          </Form.Text>
        </Form.Group>

        {image && (
          <div className="mb-3 text-center">
            <img
              src={image}
              alt="Preview"
              style={{ maxWidth: "300px", maxHeight: "200px" }}
            />
          </div>
        )}

        <div className="text-end">
          <Button variant="primary" type="submit">
            Add Vegetation
          </Button>
        </div>
      </Form>

      <ThankYouModal show={showModal} handleClose={handleModalClose} />
    </div>
  );
}

export default FormAddVegetation;
