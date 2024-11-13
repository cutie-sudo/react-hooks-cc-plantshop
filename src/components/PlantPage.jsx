import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Manage the search query state

  // Fetch plants data from the server
  useEffect(() => {
    const url = `https://react-hooks-cc-plantshop-2-w4do.onrender.com/plants?_=${new Date().getTime()}`;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Or handle your data as needed
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  

  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]); // Add new plant to the list
  };

  // Toggle the sold-out status for a plant
  const toggleSoldOut = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchQuery={setSearchQuery} />
      <PlantList plants={filteredPlants} toggleSoldOut={toggleSoldOut} />
    </main>
  );
}

export default PlantPage;
