import Vegetation from "../components/Vegetation";
import Places from "../components/places/Places";

function Dashboard({ vegetationList, setVegetationList, placesList, setPlacesList }) {
  return (
    <div>
      <Vegetation vegetationList={vegetationList} setVegetationList={setVegetationList} />
      <Places placesList={placesList} setPlacesList={setPlacesList} />
    </div>
  );
}

export default Dashboard;