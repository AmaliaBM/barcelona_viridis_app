
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddFormVegetationPage/FormAddVegetationPage.css";

function FormAddVegetation({ setVegetationList }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleLatinName = (event) => {
    setLatinName(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };


  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleImage = (event) => {
    setImage(event.target.value);
  };

  const navigate = useNavigate();

  const handleAddVegetation = (event) => {
    event.preventDefault();

    const newVegetation = {
      name: name,
      latinName: latinName,
      category: category,
      description: description,
      image: image || "/error404.avif",
      id: String(Math.floor(Math.random() * 10000000)),
    };

    setVegetationList ((valorActual) => {
      let nuevoEstado = [...valorActual, newVegetation];
      return nuevoEstado;
    });
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
          onChange={handleName}
          value={name}
        />

        <label htmlFor="latinname">Latin Name:</label>
        <input
          type="text"
          name="latinName"
          id="latinname"
          onChange={handleLatinName}
          value={latinName}
        />

       <label htmlFor="category">Category:</label>
        <select
        name="category"
        id="category"
        onChange={handleCategory}
        value={category}
        >
        <option value="">Select one option:</option>
        <option value="green area">Green Area</option>
        <option value="tree">Tree</option>
        <option value="bush">Bush</option>
        <option value="plant">Plant</option>
        <option value="flower">Flower</option>
        </select>

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleDescription}
          value={description}
        />

        <label htmlFor="descriptionImage">Image:</label>
        <input
          type="url"
          name="imagen"
          id="imagen"
          onChange={handleImage}
          value={image}
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default FormAddVegetation;
