import { Link } from "react-router-dom";
import "./HomePage.css";

import Navbar from '../components/layout/Navbar/Navbar';
import Footer from '../components/layout/Footer'


function HomePage() {
  
  return (
    <div>
      <Navbar />

      <main>
        <h1>Bienvenido a Barcelona Viridis</h1>

        <section>
          <h2>Artículos de interés</h2>
          
        </section>

        <section>
          <h2>Plantas destacadas de Barcelona</h2>
          {/*<Carousel images={photos} />*/}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
