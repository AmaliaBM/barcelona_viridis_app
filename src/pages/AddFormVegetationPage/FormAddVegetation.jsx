import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormAddVegetation.css";

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

    setVegetationList((valorActual) => [...valorActual, newVegetation]);
    navigate("/");
  };

  return (
    <div id="addvegetation">
      <form onSubmit={handleAddVegetation}>
        <h2>Add Vegetation</h2>

        <label htmlFor="name">Vegetation:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <label htmlFor="latinName">Latin Name:</label>
        <input
          type="text"
          name="latinName"
          id="latinName"
          onChange={(e) => setLatinName(e.target.value)}
          value={latinName}
          required
        />

        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          required
        >
          <option value="">Select one option:</option>
          <option value="green area">Green Area</option>
          <option value="tree">Tree</option>
          <option value="bush">Bush</option>
          <option value="plant">Plant</option>
          <option value="flower">Flower</option>
        </select>

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />

        <label htmlFor="image">Image:</label>
        <input
          type="url"
          name="image"
          id="image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default FormAddVegetation;
