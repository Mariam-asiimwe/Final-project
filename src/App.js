
import Button from "react-bootstrap/Button"
import './App.scss';
import { useState } from 'react';
import Footer from './Components/Pages/Footer';
import RecipeNavbar from "./Components/RecipeNavbar";



import RecentRecipes from "./components/RecentRecipes";

// import LikedRecipe from './components/LikedRecipe';





function App() {
  const [recipes, setRecipes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  let apiUrl = "https://api.edamam.com/api/recipes/v2?type=public&app_id=0639710c&app_key=e94e7c998f0107fb2b6478641c6d762d&q="
  async function getRecipes(term) {
    let result = await fetch(apiUrl + term)
    let data = await result.json()
    console.log(data.hits)
    setRecipes(data.hits.slice(0, 6))
  }
  function handleSubmit() {
    getRecipes(searchTerm);
    setSearchTerm("");

  }

  return (

    <>
      <RecipeNavbar />




      <Footer />

    </>


  );

}

export default App;