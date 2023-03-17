import logo from './logo.svg';
import Button from "react-bootstrap/Button"
import './App.css';
import { useState } from 'react';


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
  function handleSubmit(){
    getRecipes(searchTerm)
  }
  
  return (
    <div className="App">
      <input value={searchTerm}onChange={(event)=>setSearchTerm(event.target.value)}/>
      <Button variant='primary' onClick={handleSubmit}>Submit</Button> 
      {recipes && recipes.map((item, index)=>{
        return <div key={index}>{item.recipe.label}
        <img src={item.recipe.image} alt=""/>
        </div>
      })}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
