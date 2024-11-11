import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, toggleSoldOut }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          name={plant.name}
          price={plant.price}
          image={plant.image}
          inStock={plant.inStock}
          soldOut={plant.soldOut} // Pass the soldOut prop to PlantCard
          toggleSoldOut={() => toggleSoldOut(plant.id)} // Pass the toggle function to PlantCard
        />
      ))}
    </ul>
  );
}

export default PlantList;