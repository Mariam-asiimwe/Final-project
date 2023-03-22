

import './App.scss';
import Footer from "./Components/Pages/Footer";
import RecipeNavbar from "./Components/RecipeNavbar";
import RecentRecipes from './Components/RecentRecipes';


function App() {

  

  return (

   

    <div className="App">
      
     
       <RecipeNavbar></RecipeNavbar>
       <RecentRecipes />
      <Footer></Footer>
    </div>
  );

}

export default App;

// import React from "react";
import Button from "react-bootstrap/Button"
import './App.scss';
import { useState } from 'react';
import RecentRecipes from "./components/RecentRecipes";
import Recipe from './components/Recipe';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap/dist/css/bootstrap.min.css";


// import LikedRecipe from './components/LikedRecipe';


function App() {
  const [recipes,setRecipes]=useState([])
  const [searchTerm,setSearchTerm]=useState("")
  let apiUrl ="https://api.edamam.com/api/recipes/v2?type=public&app_id=0639710c&app_key=e94e7c998f0107fb2b6478641c6d762d&q="
  async function getRecipes(term){
    let result=await fetch(apiUrl+term)
    let data=await result.json()
    console.log (data.hits)
    setRecipes(data.hits.slice(0,6))
  }
  function handleSubmit(){
    getRecipes(searchTerm);
    setSearchTerm("");
    
  }

  return (
    <div className="App">
      <input value={searchTerm}onChange={(event)=>setSearchTerm(event.target.value)}/>
      <Button variant='primary' onClick={handleSubmit}>Search</Button> 
      <div className='grid-container'>

      {recipes && recipes.map((item, index)=>{
        return <div className='grid-item' key={index}>{item.recipe.label}
        <img  src={item.recipe.image} alt=""/>
        <Recipe key={index} item={item}/>
        </div>
      })}
      </div>
      
    </div>
  );

}

export default App;

