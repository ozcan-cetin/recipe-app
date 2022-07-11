import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Form from "../../components/header/Form";
import RecipeCard from "./RecipeCard";
import { Container } from "./Style";


const Home = () => {
  const id = "5d05c6be";
  const apiKey = "1617ae65599f186bcf6d2338f34746f7";
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [loading, setLoading] = useState(true)
  const url = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${apiKey}&mealType=${mealType}`;

  const getRecipes = async () => {
    try {
      const {data} = await axios.get(url);
      console.log(data);
    setRecipes(data.hits)
    setMealType("")
    setQuery("")
    setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

//   getRecipes()

//   useEffect(() => {
//     getRecipes();
//   }, []);
const handleClick=(e)=>{
    e.preventDefault();
    setLoading(true)
    getRecipes()
}


  return <div>
  <h1>Food App</h1>
  <form onSubmit={handleClick}>
    <input type="text" name="query" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <select name="mealType" id="mealType" value={mealType} onChange={(e)=>setMealType(e.target.value)}>
            <option value="">Choose Meal</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Breakfast">Dinner</option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
        </select>
        <button type="submit">Search</button>
  </form>
  <Container>
    {loading ? <h1>Loading..</h1>
    :
    recipes?.map((item,index)=>{
    return(
        <RecipeCard key={index} recipe={item.recipe}/>
    )
  })}
  </Container>
  
  </div>;
};

export default Home;
