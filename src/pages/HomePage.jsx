import { Link } from "react-router-dom";
import "./HomePage.css";

import CustomCarousel from '../components/layout/CustomCarousel';
import ArticlesOfInterest from "./ArticlesOfInterest/ArticlesOfInterest";

function HomePage({ vegetationList }) {
  const carouselData = vegetationList
    .slice(0, 5)
    .map((item) => ({
      title: item.name,
      img: item.image || "https://via.placeholder.com/800x400?text=Imagen+no+disponible",
      id: item.id,
    }));

  return (
    <div>
      <main>
        <h1>Bienvenido a Barcelona Viridis</h1>

        <section className="mb-5">
          <CustomCarousel vegetation={carouselData} />
        </section>

        <section className="mb-5">
          <ArticlesOfInterest />
        </section>
      </main>
    </div>
  );
}
export default HomePage;
