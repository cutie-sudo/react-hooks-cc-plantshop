// Ensure imports are at the top level of the file
import React, { useState } from 'react';

// NewPlantForm component definition
function NewPlantForm({ addPlant }) {
  const [plantName, setPlantName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Track error state

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check for inputs
    if (!plantName || !image || !price) {
      setError("All fields are required!");
      return;
    }

    if (isNaN(price) || !price) {
      setError("Price must be a valid number!");
      return;
    }

    setLoading(true);
    setError(null); // Reset error message if all fields are valid

    const newPlant = {
      name: plantName,
      image,
      price: parseFloat(price),
      inStock: true,
    };

    // Send POST request to add the new plant
    const url = `https://react-hooks-cc-plantshop-2-w4do.onrender.com/plants?_=${new Date().getTime()}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add plant");
        }
        return res.json();
      })
      .then((data) => {
        addPlant(data); // Call the callback to update parent state
        setPlantName("");
        setImage("");
        setPrice("");
        setLoading(false); // Stop loading when request is done
      })
      .catch((err) => {
        setError(err.message); // Show error message if something goes wrong
        setLoading(false);
      });
  };

  return (
    <div className="new-plant-form">
      <h2>Add New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
          placeholder="Plant name"
        />
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Plant'}
        </button>
      </form>
    </div>
  );
}

// Exporting the NewPlantForm component at the top level
export default NewPlantForm;
