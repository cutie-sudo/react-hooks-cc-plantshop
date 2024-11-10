import React, { useState } from 'react';

function NewPlantForm({ plantArr, setPlantArr }) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.image || !form.price) {
      alert("Please fill in all fields!");
      return;
    }

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((newPlant) => {
        // Update the plant list with the newly added plant
        setPlantArr((prevPlants) => [newPlant, ...prevPlants]);

        // Clear the form fields after submission
        setForm({
          name: '',
          image: '',
          price: '',
        });
      })
      .catch((error) => {
        console.error('Error adding plant:', error);
        alert('Error adding plant. Please try again later.');
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
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
