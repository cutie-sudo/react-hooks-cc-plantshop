import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import Search from './Search';

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch plants when the component mounts (on page load or refresh)
  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error before making a new request

    fetch('http://localhost:6001/plants')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch plants.');
        }
        return response.json();
      })
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data); // Initially show all plants
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); // Set error if request fails
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs only once when the component mounts

  // Function to handle deleting a plant
  const handleDelete = (id) => {
    // Delete the plant from the backend
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete plant.');
        }
        // If delete is successful, remove the plant from state
        setPlants(plants.filter((plant) => plant.id !== id));
        setFilteredPlants(filteredPlants.filter((plant) => plant.id !== id)); // Ensure the filtered list is also updated
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Function to handle search query
  const handleSearch = (query) => {
    if (query === "") {
      setFilteredPlants(plants); // If the search query is empty, show all plants
    } else {
      const filtered = plants.filter((plant) =>
        plant.name.toLowerCase().includes(query.toLowerCase()) // Case-insensitive search
      );
      setFilteredPlants(filtered); // Update filtered plants
    }
  };

  // Display loading message while fetching data
  if (loading) {
    return <div>Loading plants...</div>;
  }

  // Display error message if fetch fails
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
   
      <Search onSearch={handleSearch} />
      
      {/* Conditionally render either filtered plants or all plants */}
      {filteredPlants.length === 0 ? (
        <p>No plants found.</p> // Empty state message when no plants match the search query
      ) : (
        <ul>
          {filteredPlants.map((plant) => (
            <li key={plant.id}>
              <PlantCard plant={plant} onDelete={handleDelete} /> {/* Pass onDelete function to PlantCard */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlantList;
