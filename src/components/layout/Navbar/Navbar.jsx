
import { Link } from "react-router-dom";
import "./Navbar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbar() {
  return (
    

    <BootstrapNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BootstrapNavbar.Brand><Link to="/">Barcelona Viritis</Link></BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
          <BootstrapNavbar.Text><Link to="/vegetation">Vegetation</Link></BootstrapNavbar.Text>
          <BootstrapNavbar.Text><Link to="/places">Places</Link></BootstrapNavbar.Text>
          <BootstrapNavbar.Text><Link to="/add-vegetation">Add your contribution</Link></BootstrapNavbar.Text>
          <BootstrapNavbar.Text><Link to="/articles-of-interest"> Articles of interest</Link></BootstrapNavbar.Text>
        </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
