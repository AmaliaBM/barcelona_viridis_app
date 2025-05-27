import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';


// Importación de páginas

import HomePage from "./pages/HomePage"

import About from './pages/About/About';
import ArticlesOfInterest from './pages/ArticlesOfInterest/ArticlesOfInterest';
import ArticleDetailPage from "./pages/ArticlesOfInterest/ArticleDetailPage"
import VegetationDetailsPage from './pages/VegetationDetailsPage/VegetationDetailsPage';
import VegetationPage from './pages/VegetationPage/VegatationPage';
import EditVegetationPage from './pages/EditVegetationPage/EditVegetationPage';
import FormAddVegetationPage from './pages/AddFormVegetationPage/FormAddVegetation';
import PlaceDetailsPage from './pages/PlaceDetailsPage/PlaceDetailsPage';
import PlaceListPage from './pages/PlaceListPage/PlaceListPage';
import NotFound from './pages/NotFound/NotFound';



// Componentes globales
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer';


function App() {
  const [vegetationList, setVegetationList] = useState([]);//useState(VegetationArr);
  const [placesList, setPlacesList] = useState([]);//useState(PlacesArr);

  return (
    <div className="App">
      <Navbar />
      <div id="contenedor">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles-of-interest" element={<ArticlesOfInterest />} />
          <Route path="/articles/:id" element={<ArticleDetailPage />} />

          {/* Vegetation */}
          <Route path="/vegetation" element={<VegetationPage vegetationList={vegetationList} setVegetationList={setVegetationList} />} />
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
