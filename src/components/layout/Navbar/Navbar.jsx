
import { Link } from "react-router-dom";
import "./Navbar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../assets/BarcelonaViridis.svg';
import BootstrapNavbar from 'react-bootstrap/Navbar';


function Navbar() {
  return (
    

    <BootstrapNavbar expand="lg" className="bg-body-tertiary">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
        <img
          src={logo}
            alt="Barcelona Viridis Logo"
            className="logo d-inline-block align-top"
        />
      </BootstrapNavbar.Brand>
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
