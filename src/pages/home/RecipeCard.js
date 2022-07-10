import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Recipe} from "./Style"

const RecipeCard = ({recipe}) => {
  // const{image, label}=recipe
  // console.log(recipe);

  const navigate = useNavigate()

  return (
    <Recipe>
      <h3>{recipe.label}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <button onClick={()=>navigate("../details", {state:recipe})}>View More</button>
    </Recipe>
  )
}

export default RecipeCard