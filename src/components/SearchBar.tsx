import React from 'react'
import "../styles/searchbar.css";

function SearchBar(){
  return (
    <div className="search-bar">
        <div className="dropdown">
            <select id="location">
                <option value="" disabled selected>Select location</option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
       
            </select>
        </div>
        <div className="dropdown">
            <select id="average-price">
                <option value="" disabled selected>Select average price</option>
                <option value="price1">Price 1</option>
                <option value="price2">Price 2</option>
                <option value="price3">Price 3</option>
              
            </select>
        </div>
        <button>Search</button>
    </div>
  );
}

export default SearchBar;