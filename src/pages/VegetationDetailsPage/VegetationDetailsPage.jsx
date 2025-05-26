
import { useParams, useNavigate, Link } from "react-router-dom";
import "./VegetationDetailsPage.css"

function VegetationDetails({ vegetationList, setVegetationList }) {
  const params = useParams();
  const navigate = useNavigate();

  const vegetationCard = vegetationlist.find((eachVegetation) => {
    if (eachVegetation.id === params.idVegetation) {
      return true;
    }
  });

  const handleDeleteVegetation= (idVegetation) => {
    const cloneState = vegetationlist.filter((vegetation) => vegetation.id !== idVegetation);
    setVegetationList(cloneState);
    navigate("/");
  };

  if (!vegetationCard) {
    return <h3>There is not vegetation</h3>;
  }

  return (
    <div id="container-detalle">
      Vegetation:{vegetationCard.name}
      <p> Latin Name: {vegetationCard.latinName}</p>
      <p> Category : {vegetationCard.category}</p>
      <p>Description: {vegetationCard.description < 400 ? "✅" : "❌"}</p>
      <img src={vegetationCard.image}></img>
      <div id="btn">
        <button
          id="delete-btn"
          onClick={() => handleDeleteVegetation(vegetationCard.id)}
        >
          Delete
        </button>
        <Link to={`//${vegetationCard.id}`}>
          <button>Edit Vegetation</button>
        </Link>
      </div>
    </div>
  );
}

export default VegetationDetails;