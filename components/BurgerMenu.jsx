
import { Link } from "react-router-dom";
import "./components/BurgerMenu.css";



function BurgerMenu() {
  return (
    <div id="BurgerMenu">
      <img src="" id="logo1"></img>
      <h1>Barcelona Viritis</h1>
      <ul>
        <Link to="">
          <li>Green areas & more</li>
        </Link>

        <Link to="">
          <li>Places</li>
        </Link>

        <Link to="">
          <li>Add your contributation</li>
        </Link>

        <Link to="">
          <li>Articles of interest</li>
        </Link>
      </ul>
    </div>
  );
}
export default BurgerMenu;