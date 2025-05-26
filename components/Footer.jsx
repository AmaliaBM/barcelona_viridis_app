
import { Link } from "react-router-dom"
import "../components/Footer.css";

function Footer() {
  return (
    <div id="Footer">
       <ul>
        <Link to="">
          <li>About Project</li>
        </Link>

        <Link to="./pages/About.jsx">
          <li>About Authora</li>
        </Link>

        <Link to="">
          <li>Links and other info</li>
        </Link>
      </ul>
    </div>
  );
}

export default Footer;
