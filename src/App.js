import logo from './logo.svg';
import Button from "react-bootstrap/Button"
import './App.scss';
import { useState } from 'react';


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
    getRecipes(searchTerm)
  }
  
  return (
    <div className="App">
      <input value={searchTerm}onChange={(event)=>setSearchTerm(event.target.value)}/>
      <Button variant='primary' onClick={handleSubmit}>Submit</Button> 
      <div className='grid-container'>

      {recipes && recipes.map((item, index)=>{
        return <div className='grid-item' key={index}>{item.recipe.label}
        <img  src={item.recipe.image} alt=""/>
        </div>
      })}
      </div>
      
    </div>
  );
}

export default App;
