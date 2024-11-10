import React, { useState } from 'react';

function NewPlantForm({ plantArr, setPlantArr }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: '',
  });
  const [loading, setLoading] = useState(false); // New loading state
  const [error, setError] = useState(''); // New error state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.image || !form.price) {
      setError("Please fill in all fields!");
      return;
    }

    setLoading(true);  // Start loading state

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((newPlant) => {
        setPlantArr((prevPlants) => [newPlant, ...prevPlants]);
        setForm({
          name: '',
          image: '',
          price: '',
        });
        setError('');  // Clear any previous errors
        setLoading(false);  // Stop loading state
      })
      .catch((error) => {
        console.error('Error adding plant:', error);
        setError('Error adding plant. Please try again later.');
        setLoading(false);  // Stop loading state
      });
  };

  return (
    <div className="new-plant-form">
      <h2>Add New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Plant name"
        />
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Show error message */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Plant'}
        </button>
      </form>
    </div>
  );
}

export default NewPlantForm;
