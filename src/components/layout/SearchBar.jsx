import Form from 'react-bootstrap/Form';
import './SearchBar.css'; 

function SearchBar({ onCategoryChange }) {
  return (
    <Form.Select
      className="green-select"
      aria-label="Buscar tipo de vegetación"
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      <option value="">🌿Looking for something specific? Select an option🔍</option>
      <option value="tree">🌲Tree</option>
      <option value="bush">🌿Bush</option>
      <option value="flower">🌸Flower</option>
      <option value="green_area">🏞️🌳 Green area</option>
    </Form.Select>
  );
}

export default SearchBar;
