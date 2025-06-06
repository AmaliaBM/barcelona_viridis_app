import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

// Componentes y páginas 
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import ArticlesOfInterest from './pages/ArticlesOfInterest/ArticlesOfInterest';
import ArticleDetailPage from './pages/ArticlesOfInterest/ArticleDetailPage';
import VegetationPage from './pages/VegetationPage/VegatationPage';
import VegetationCategoryPage from "./pages/VegetationPage/VegetationCategoryPage";
import VegetationDetailsPage from './pages/VegetationDetailsPage/VegetationDetailsPage';
import EditVegetationPage from './pages/EditVegetationPage/EditVegetationPage';
import FormAddVegetation from './pages/AddFormVegetationPage/FormAddVegetation';
import PlaceListPage from './pages/PlaceListPage/PlaceListPage';
import PlaceDetailsPage from './pages/PlaceDetailsPage/PlaceDetailsPage';

function App() {
  const [vegetationList, setVegetationList] = useState([]);
  const [placesList, setPlacesList] = useState([]);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [vegRes, placesRes, articleRes] = await Promise.all([
          axios.get('https://barcelona-viridis-server.onrender.com/vegetation'),
          axios.get('https://barcelona-viridis-server.onrender.com/places'),
          axios.get('https://barcelona-viridis-server.onrender.com/article')
        ]);

        setVegetationList(vegRes.data);
        setPlacesList(placesRes.data);
        setArticleList(articleRes.data);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <div id="contenedor">
        <Routes>
          {/* Rutas generales */}
          <Route path="/" element={<HomePage vegetationList={vegetationList} />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles-of-interest" element={<ArticlesOfInterest articles={articleList} />} />
          <Route path="/articles/:id" element={<ArticleDetailPage articles={articleList} />} />

          {/* Rutas de vegetación */}
          <Route path="/vegetation" element={<VegetationPage vegetationList={vegetationList} setVegetationList={setVegetationList} />} />

          {/* Ruta específica para categoría filtrada - debe ir antes que :id */}
          <Route path="/vegetation/category/:category" element={<VegetationCategoryPage />} />

          {/* Rutas para detalle y edición de vegetación */}
          <Route path="/vegetation/:id" element={<VegetationDetailsPage vegetationList={vegetationList} setVegetationList={setVegetationList} />} />
          <Route path="/vegetation/:id/edit" element={<EditVegetationPage vegetationList={vegetationList} setVegetationList={setVegetationList} />} />
          <Route path="/add-vegetation" element={<FormAddVegetation setVegetationList={setVegetationList} />} />

          {/* Rutas de lugares */}
          <Route path="/places" element={<PlaceListPage placesList={placesList} />} />
          <Route path="/places/:id" element={<PlaceDetailsPage placesList={placesList} vegetationList={vegetationList} />} />

          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
