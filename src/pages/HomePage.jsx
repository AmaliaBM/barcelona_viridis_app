import { Link } from "react-router-dom";
import "./HomePage.css";


import CustomCarousel from '../components/layout/CustomCarousel';
import ArticlesOfInterest from "./ArticlesOfInterest/ArticlesOfInterest";

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

        <section className="mb-5">
          <ArticlesOfInterest />
        </section>


        <div>
        <section className="mb-5">
        <CustomCarousel vegetation={plantas} />
        </section>
        </div>

        
      </main>
    </div>
  );
}

export default HomePage;
