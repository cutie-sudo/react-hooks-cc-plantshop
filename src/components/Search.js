import React from "react";

function Search({ setSearchQuery }) {
  const handleChange = (event) => {
    setSearchQuery(event.target.value); // Update the search query state when the user types
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a plant..."
        onChange={handleChange} // Listen for changes to the input field
      />
    </div>
  );
}

export default Search;