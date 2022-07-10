import React from 'react'
import {Recipe} from "./Style"

const RecipeCard = ({recipe}) => {
  const{image, calories, dishType}=recipe
  console.log(image);
  return (
    <Recipe>
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
    </Recipe>
  )
}

export default RecipeCard