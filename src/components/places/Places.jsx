

import "./Places.css";

function Places({ placesList }) {
  
  return (
    <div id="Places">
      {placesList.map((eachPlace, index) => {
        return (
          <Places
            key={index}
            place={eachPlace}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default Places;