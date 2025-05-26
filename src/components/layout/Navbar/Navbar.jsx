
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div id="Navbar">
      <img src="/logo.png" alt="Barcelona Viridis Logo" id="logo1" />
      <h1>Barcelona Viridis</h1>
      <ul>
        <li><Link to="/">Green areas & more</Link></li>
        <li><Link to="/places">Places</Link></li>
        <li><Link to="/add">Add your contribution</Link></li>
        <li><Link to="/articles">Articles of interest</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
