import React from "react";

function PlantCard({ name, price, image, soldOut, toggleSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={image || "https://via.placeholder.com/400"} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {soldOut ? (
        <button className="sold-out">Sold Out</button> // Show Sold Out button if plant is sold out
      ) : (
        <button className="primary">In Stock</button> // Show In Stock button if plant is available
      )}
      <button onClick={() => toggleSoldOut()} className="toggle-sold-out">
        {soldOut ? "Mark as Available" : "Mark as Sold Out"}{" "}
        
      </button>
    </li>
  );
}

export default PlantCard;