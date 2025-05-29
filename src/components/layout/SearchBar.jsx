import Select from 'react-select';
import { useNavigate } from 'react-router-dom';

const options = [
  { value: 'tree', label: '🌲 Tree' },
  { value: 'bush', label: '🌿 Bush' },
  { value: 'flower', label: '🌸 Flower' },
  { value: 'green_area', label: '🏞️🌳 Green area' },
];

function SearchBar() {
  const navigate = useNavigate();

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#c8e6c9' : 'white',
      color: '#2e4d25',
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

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      navigate(`/vegetation/category/${selectedOption.value}`);
    } else {
      navigate('/vegetation'); 
    }
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      onChange={handleChange}
      placeholder="🌿 Looking for something specific? Select an option 🔍"
      isClearable
    />
  );
}

export default SearchBar;
