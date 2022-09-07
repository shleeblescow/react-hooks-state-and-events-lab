import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [foodFilter, setFoodFilter] = useState("All")

  let filteredFood;
	switch (foodFilter) {
		case "Produce":
			filteredFood = items.filter(food=>food.category === "Produce")
			break;
		case "Dairy":
			filteredFood = items.filter(food=>food.category === "Dairy")
			break;
    case "Dessert":
      filteredFood = items.filter(food=>food.category === "Dessert") 
      break;
		default:
			filteredFood = items;
			break;
	}
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select 
          name="filter" 
          onChange={(event)=>{setFoodFilter(event.target.value)}}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredFood.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
