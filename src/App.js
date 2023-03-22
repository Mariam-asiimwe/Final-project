
import Button from "react-bootstrap/Button"
import './App.scss';
import { useState } from 'react';
import Footer from "./Components/Pages/Footer";
import RecipeNavbar from "./Components/RecipeNavbar";


function App() {

  const [recipes,setRecipes]=useState([])
  const [searchTerm,setSearchTerm]=useState("chicken")
  let apiUrl ="https://api.edamam.com/api/recipes/v2?type=public&app_id=0639710c&app_key=e94e7c998f0107fb2b6478641c6d762d&q="
  async function getRecipes(term){
    let result=await fetch(apiUrl+term)
    let data=await result.json()
    console.log (data.hits)
    setRecipes(data.hits)
  }
  function handleSubmit() {
    getRecipes(searchTerm);
    setSearchTerm("");

  }

  return (

   

    <div className="App">
      {/* <input value={searchTerm}onChange={(event)=>setSearchTerm(event.target.value)}/>
      <Button variant='primary' onClick={handleSubmit}>Submit</Button>  */}
      {recipes && recipes.map((item, index)=>{
        return <div key={index}>{item.recipe.label}
        <img src={item.recipe.image} alt=""/>
        </div>
      })}
       <RecipeNavbar></RecipeNavbar>
      <Footer></Footer>
    </div>
  );

}

export default App;