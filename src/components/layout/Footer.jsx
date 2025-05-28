import { Link } from "react-router-dom";
import "./Footer.css";

import ListGroup from 'react-bootstrap/ListGroup';


function Footer() {
  return (
    <div id="Footer">
       <ListGroup>
      <ListGroup.Item><Link to="/about">🍃About Project🍃</Link></ListGroup.Item>
      <ListGroup.Item><Link to="/info">🍃Links and other info🍃</Link></ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Footer;
