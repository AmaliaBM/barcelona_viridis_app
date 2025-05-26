import VegetationCard from "../../components/vegetation/VegetationCard";
import "./VegetationPage.css";

function VegetationPage({ vegetationList, setVegetationList }) {
  const handleDeleteVegetation = (index) => {
    const cloneState = [...vegetationList];
    cloneState.splice(index, 1);
    setVegetationList(cloneState);
  };

  return (
    <div id="VegetationPage">
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
export default VegetationPage;
