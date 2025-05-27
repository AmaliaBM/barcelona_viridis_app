import { Link } from "react-router-dom";
import "./HomePage.css";

import CustomCarousel from '../components/layout/CustomCarousel';
import ArticlesOfInterest from "./ArticlesOfInterest/ArticlesOfInterest";

function HomePage({ vegetationList }) {
  const carouselData = vegetationList.map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    image: item.image
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
