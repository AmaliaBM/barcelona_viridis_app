
import { Container } from "react-bootstrap";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";



function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container className="app-container">
        {children}
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
