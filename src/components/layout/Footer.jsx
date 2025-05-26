import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div id="Footer">
      <ul>
        <li><Link to="/about">About Project</Link></li>
        <li><Link to="/about-authora">About Authora</Link></li>
        <li><Link to="/info">Links and other info</Link></li>
      </ul>
    </div>
  );
}

export default Footer;
