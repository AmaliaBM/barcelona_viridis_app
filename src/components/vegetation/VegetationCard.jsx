
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VegetationCard(props) {
  return (
    <Link to={`/vegetation/${props.vegetation.id}`}>
      <div id="cada-vegetation">
        <img src={props.vegetation.image ? props.vegetation.image : ""} alt="vegetation photo" />
        <div id="datos-vegetation">
          <p>{props.vegetation.title}</p>
        </div>
      </div>
    </Link>
  );
}

export default VegetationCard;
