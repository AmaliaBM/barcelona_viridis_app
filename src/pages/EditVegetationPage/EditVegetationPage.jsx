import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditVegetationPage.css";

function EditVegetation({ vegetationList, setVegetationList, index }) {
  const [name, setName] = useState(vegetationList[index].name);
  const [latinName, setLatinName] = useState(vegetationList[index].latinName);
  const [category, setCategory] = useState(vegetationList[index].category);
  const [description, setDescription] = useState(vegetationList[index].description);
  const [image, setImage] = useState(vegetationList[index].image);

  const navigate = useNavigate();

  const handleEditVegetation = (event) => {
    event.preventDefault();

    const vegetationEdit = {
      ...vegetationList[index],
      name,
      latinName,
      category,
      description,
      image: image || "/error404.avif",
    };

    const newVegetationList = [...vegetationList];
    newVegetationList[index] = vegetationEdit;

    setVegetationList(newVegetationList);

    navigate("/");
  };

  return (
    <div id="addvegetation">
      <h1>Edit Vegetation</h1>

      <form onSubmit={handleEditVegetation}>
        <label htmlFor="name">Vegetation Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <label htmlFor="latinname">Latin Name:</label>
        <input
          type="text"
          name="latinName"
          id="latinname"
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

        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default EditVegetation;
