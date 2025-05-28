import Select from 'react-select';
import './SearchBar.css'; // Si tienes estilos adicionales

const options = [
  { value: 'tree', label: '🌲 Tree' },
  { value: 'bush', label: '🌿 Bush' },
  { value: 'flower', label: '🌸 Flower' },
  { value: 'green_area', label: '🏞️🌳 Green area' },
];

function SearchBar({ onCategoryChange }) {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#c8e6c9' : 'white',
      color: state.isFocused ? '#2e4d25' : '#2e4d25',
      cursor: 'pointer',
      fontWeight: 500,
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#f1f6f0',
      borderColor: state.isFocused ? '#388e3c' : '#4caf50',
      borderRadius: 8,
      padding: '2px 4px',
      boxShadow: state.isFocused ? '0 0 0 0.25rem rgba(76, 175, 80, 0.25)' : 'none',
      '&:hover': {
        borderColor: '#388e3c',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#2e4d25',
      fontWeight: 500,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#2e4d25',
      fontWeight: 500,
    }),
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      onChange={(selectedOption) => onCategoryChange(selectedOption?.value || '')}
      placeholder="🌿 Looking for something specific? Select an option 🔍"
      isClearable
    />
  );
}

export default SearchBar;
