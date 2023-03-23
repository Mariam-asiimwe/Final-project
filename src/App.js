import { useState } from 'react';
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.scss';
import Recipe from './components/Recipe';
import { useState } from './components/contexts/theme';


function App() {
  const [recipes,setRecipes]=useState([])
  const [searchTerm,setSearchTerm]=useState()
  let apiUrl ="https://api.edamam.com/api/recipes/v2?type=public&app_id=0639710c&app_key=e94e7c998f0107fb2b6478641c6d762d&q="
  async function getRecipes(term){
    let result=await fetch(apiUrl+term)
    let data=await result.json()
    // console.log (data.hits)
    setRecipes(data.hits.slice(0,6))
  }
  function handleSubmit(){
    getRecipes(searchTerm)
  }
  
  return (
    <div className="App">
      <input value={searchTerm}onChange={(event)=>setSearchTerm(event.target.value)}/>
      <Button variant='primary' onClick={handleSubmit}>Search</Button> 

      {recipes && recipes.map((item, index)=>{
        return <div key={index}>{item.recipe.label}
        <img src={item.recipe.image} alt=""/>
       // {recipes && recipes.map((item, index)=>
        <Recipe key={item} item={item} />
      )}
        </div>
      })}
      
    </div>
    
  );
}


export default App;
