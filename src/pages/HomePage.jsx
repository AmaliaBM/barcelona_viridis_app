import { Link } from "react-router-dom";
import "./HomePage.css";


import CustomCarousel from '../components/layout/CustomCarousel';

const plantas = [
  { title: "Primera planta", img: "url1" },
  { title: "Segunda planta", img: "url2" },
  { title: "Tercera planta", img: "url3" },
];

function HomePage() {
  return (
    <div>
      <main>
        <h1>Bienvenido a Barcelona Viridis</h1>

        <section>
          <h2>Artículos de interés</h2>
        </section>

        <section>
        <CustomCarousel vegetation={plantas} />
        </section>

        
      </main>
    </div>
  );
}

export default HomePage;
