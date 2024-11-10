import React from "react";

function PlantCard({ plant, onDelete }) {
  const [inStock, setInStock] = React.useState(true); // Manage inStock state

  const handleDelete = () => {
    // Call the onDelete function passed as prop to remove plant from the list
    onDelete(plant.id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>

      {inStock ? (
        <button onClick={() => setInStock(false)} className="primary">
          In Stock
        </button>
      ) : (
        <button disabled>Out of Stock</button>
      )}

      {/* Delete Button */}
      <button onClick={handleDelete} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default PlantCard;
