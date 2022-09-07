import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// import Item from "./Item"

function App() {

  // default isClicked == false means light mode, not added to cart
  const [isClicked, toggleIsClicked] = useState(false)

  // alter the app class to change from light to dark mode
  const buttonText = isClicked === true ? "Light Mode" : "Dark Mode"
  const appClass = isClicked === true ? "App dark" : "App light"

  const [foodFilter, setFoodFilter] = useState("All")

  let filteredFood;
	switch (foodFilter) {
		case "Produce":
			filteredFood = itemData.filter(food=>food.category === "Produce")
			break;
		case "Dairy":
			filteredFood = itemData.filter(food=>food.category === "Dairy")
			break;
    case "Dessert":
      filteredFood = itemData.filter(food=>food.category === "Dessert") 
      break;
		default:
			filteredFood = itemData;
			break;
	}

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=>toggleIsClicked(!isClicked)}>{buttonText}</button>
      </header>
      <ShoppingList items={filteredFood} setFoodFilter={setFoodFilter} />
    </div>
  );
}

export default App;
