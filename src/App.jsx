import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


// Importación de páginas

import About from './pages/About/About';
import AboutAuthora from './pages/AboutAuthora/AboutAuthora';
import ArticlesOfInterest from './pages/ArticlesOfInterest/ArticlesOfInterest';
import VegetationDetailsPage from './pages/VegetationDetailsPage/VegetationDetailsPage';
import EditVegetationPage from './pages/EditVegetationPage/EditVegetationPage';
import FormAddVegetationPage from './pages/AddFormVegetationPage/FormAddVegetation';
import PlaceListPage from './pages/PlaceListPage/PlaceListPage';
import NotFound from './pages/NotFound/NotFound';


// Componentes globales
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer';


function App() {
  const [vegetationList, setVegetationList] = useState(VegetationArr);
  const [placesList, setPlacesList] = useState(PlacesArr);

  return (
    <div className="App">
      <Navbar />
      <div id="contenedor">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-authora" element={<AboutAuthora />} />
          <Route path="/articles-of-interest" element={<ArticlesOfInterest />} />

          {/* Vegetation */}
          <Route path="/vegetation/:id" element={<VegetationDetailsPage />} />
          <Route path="/vegetation/:id/edit" element={<EditVegetationPage />} />
          <Route path="/add-vegetation" element={<FormAddVegetationPage />} />

          {/* Places */}
          <Route path="/places" element={<PlaceListPage />} />
          <Route path="/places/:id" element={<PlaceDetailsPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
