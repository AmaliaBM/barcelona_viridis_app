import { Container } from "react-bootstrap";
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
    <div className="HomePage">
    <div className="home-wrapper">
      <Container className="home-container">
        <main>
          <h1 className="text-center mb-4">Bienvenido a Barcelona Viridis</h1>

          <section className="mb-5">
            <CustomCarousel vegetation={carouselData} />
          </section>

          <section className="mb-5">
            <ArticlesOfInterest />
          </section>
        </main>
      </Container>
    </div></div>
  );
}

export default HomePage;

