import VegetationCard from "./VegetationCard";
import "./Vegetation.css";

function Vegetation({ vegetationList, setVegetationList }) {
  const handleDeleteVegetation = (index) => {
    const cloneState = [...vegetationList];
    cloneState.splice(index, 1);
    setVegetationList(cloneState);
  };

  return (
    <div id="Vegetation">
      {vegetationList.map((eachVegetation, index) => {
        return (
          <VegetationCard
            key={index}
            vegetation={eachVegetation}
            onDelete={() => handleDeleteVegetation(index)}
            index={index}
          />
        );
      })}
    </div>
  );
}
export default Vegetation;
