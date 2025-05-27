import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormAddVegetation.css";

import { Form, Button } from 'react-bootstrap';

function FormAddVegetation({ setVegetationList }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

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

    setVegetationList((valorActual) => [...valorActual, newVegetation]);
    navigate("/");
  };

  return (
    <div id="addvegetation">
      <Form onSubmit={handleAddVegetation}>
        <h2>Add Vegetation</h2>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Select
            aria-label="Select category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select one option of category:</option>
            <option value="greenarea">Green Area</option>
            <option value="tree">Tree</option>
            <option value="bush">Bush</option>
            <option value="flower">Flower</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Vegetation's name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-describedby="nameHelp"
          />
          <Form.Text id="nameHelp" muted>
            Don't worry if you don't know the exact species of the plant.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="latinname">
          <Form.Label>Latin Name</Form.Label>
          <Form.Control
            type="text"
            name="latinName"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
            aria-describedby="latinHelp"
          />
          <Form.Text id="latinHelp" muted>
            This is optional if you only know the common name.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="url"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <Form.Text muted>
            Optional: You can provide a link to an image of the vegetation.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
}

export default FormAddVegetation;
