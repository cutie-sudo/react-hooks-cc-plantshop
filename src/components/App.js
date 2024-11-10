import React, { useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import PlantCard from "./PlantCard";


function App() {
  // State to manage whether the form is visible
  const [showForm, setShowForm] = useState(false);
  const [plants, setPlants] = useState([]); // To store the list of plants

  const toggleForm = () => setShowForm(!showForm);

  // Function to add a new plant to the list
  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  return (
    <div className="app">
      <Header />
      <PlantPage />
      
     
    
     
      </div>
    
  
  
  );
}


export default App;
