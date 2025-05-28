import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./HomePage.css";

import SearchBar from "../components/layout/SearchBar"
import CustomCarousel from '../components/layout/CustomCarousel';
import ArticlesOfInterest from "./ArticlesOfInterest/ArticlesOfInterest";

function HomePage({ vegetationList }) {
  const [filteredVegetation, setFilteredVegetation] = useState(vegetationList);

  useEffect(() => {
    setFilteredVegetation(vegetationList); // Inicializar cuando cambie la lista
  }, [vegetationList]);

  const handleCategoryChange = (category) => {
    if (!category) {
      setFilteredVegetation(vegetationList); // sin filtro
    } else {
      const filtered = vegetationList.filter(
        (item) => item.category === category
      );
      setFilteredVegetation(filtered);
    }
  };
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
            <div className="home-header">
              <p className="intro-text">
              Barcelona Viridis is a collaborative application that invites you to discover, share, and protect Barcelona's urban vegetation.
              </p>
            </div>
            <section className="mb-4">
            <SearchBar onCategoryChange={handleCategoryChange} />
          </section>
            <section className="mb-5">
              <ArticlesOfInterest />
              
            </section><section className="mb-5">
              <CustomCarousel vegetation={carouselData} />
            </section>
          </main>
        </Container>
      </div>
    </div>
  );
}

export default HomePage;

