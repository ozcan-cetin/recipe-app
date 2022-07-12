import React from 'react'
import {useNavigate, useLocation} from "react-router-dom";
import {DetailsContainer, DetailsContainer2, Nutrients} from "./Style"

const Details = () => {

  const navigate = useNavigate()
  const location = useLocation();
  const recipe = location.state;

  const {totalNutrients, ingredientLines:ingredients}=recipe;
  // console.log(totalNutrients)

  const{CA:calc, CHOCDF:carb, CHOLE:chol, ENERC_KCAL:kcal, FAT:fat, PROCNT:prot} = totalNutrients;
  // console.log(calc.quantity);
  return (
    <DetailsContainer>
      <div>
      <h1>{recipe.label}</h1>
      </div>
      <DetailsContainer2>
        <div>
      <img src={recipe.image} alt={recipe.label} />
        </div>
        <Nutrients>
       {ingredients.map((item)=><h3>{item}</h3>)}
        </Nutrients>
        <Nutrients>
          <h3>{calc.label} : {Math.round(calc.quantity)}{calc.unit}</h3>
          <h3>{carb.label} : {Math.round(carb.quantity)}{carb.unit}</h3>
          <h3>{chol.label} : {Math.round(chol.quantity)}{chol.unit}</h3>
          <h3>{kcal.label} : {Math.round(kcal.quantity)}{kcal.unit}</h3>
          <h3>Calories : {Math.round(kcal.quantity)}</h3>
          <h3>{fat.label} : {Math.round(fat.quantity)}</h3>
          <h3>{carb.label} : {Math.round(carb.quantity)}</h3>
          <h3>{prot.label} : {Math.round(prot.quantity)}</h3>
          <h3>{chol.label} : {Math.round(chol.quantity)}</h3>
        </Nutrients>
      </DetailsContainer2>
      <div>
      <button onClick={()=>navigate("../home")}>HOME</button>
      </div>
    </DetailsContainer>
  )
}

export default Details