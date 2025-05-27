import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes
import Layout from './components/layout/Layout';

// Páginas principales
import HomePage from './pages/HomePage';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

// Páginas de artículos
import ArticlesOfInterest from './pages/ArticlesOfInterest/ArticlesOfInterest';
import ArticleDetailPage from './pages/ArticlesOfInterest/ArticleDetailPage';

// Páginas de vegetación
import VegetationPage from './pages/VegetationPage/VegatationPage';
import VegetationDetailsPage from './pages/VegetationDetailsPage/VegetationDetailsPage';
import EditVegetationPage from './pages/EditVegetationPage/EditVegetationPage';
import FormAddVegetation from './pages/AddFormVegetationPage/FormAddVegetation';

// Páginas de lugares
import PlaceListPage from './pages/PlaceListPage/PlaceListPage';
import PlaceDetailsPage from './pages/PlaceDetailsPage/PlaceDetailsPage';

function App() {
  const [vegetationList, setVegetationList] = useState([]);
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/AmaliaBM/barcelona_viridis_server/master/db.json")
      .then((res) => res.json())
      .then((data) => {
        setVegetationList(data.vegetation);
        setPlacesList(data.places);
      })
      .catch((error) => console.error("Error al cargar datos:", error));
  }, []);

  return (
    <Layout>
      <div id="contenedor">
        <Routes>
          {/* Inicio y páginas generales */}
          <Route path="/" element={<HomePage vegetationList={vegetationList} />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles-of-interest" element={<ArticlesOfInterest />} />
          <Route path="/articles/:id" element={<ArticleDetailPage />} />

          {/* Vegetación */}
          <Route
            path="/vegetation"
            element={
              <VegetationPage
                vegetationList={vegetationList}
                setVegetationList={setVegetationList}
              />
            }
          />
          <Route
            path="/vegetation/:id"
            element={
              <VegetationDetailsPage
                vegetationList={vegetationList}
                setVegetationList={setVegetationList}
              />
            }
          />
          <Route
            path="/vegetation/:id/edit"
            element={
              <EditVegetationPage
                vegetationList={vegetationList}
                setVegetationList={setVegetationList}
              />
            }
          />
          <Route
            path="/add-vegetation"
            element={<FormAddVegetation setVegetationList={setVegetationList} />}
          />

          {/* Lugares */}
          <Route path="/places" element={<PlaceListPage placesList={placesList} />} />
          <Route
            path="/places/:id"
            element={
              <PlaceDetailsPage
                placesList={placesList}
                vegetationList={vegetationList}
              />
            }
          />

          {/* Página no encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
