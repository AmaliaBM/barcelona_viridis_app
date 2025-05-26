

import Vegetation from "../components/Vegetation";
import Places from "../components/Places";

function HomePage({ vegetationList, setVegetationList, placesList, setPlacesList }) {
  return (
    <div>
      <Vegetation vegatationList={vegetationList} setVegetationList={setVegetationList} />
      <Places placesList={placesList} setPlacesList={setPlacesList} />
    </div>
  );
}

export default HomePage;
