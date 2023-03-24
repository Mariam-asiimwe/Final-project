import React, {useState} from 'react';
import Button from "react-bootstrap/Button"

function Recipe({item}) {
  const [showIngredients, setShowIngredients]=useState(false);
  console.log(item);
  
  return (
    <div>
      <h4>{item.recipe.label}</h4>
      <img src={item.recipe.image} alt=""/>
      <br/><br/>
      <Button style={{backgroundColor:'black'}} variant='primary' onClick={() => setShowIngredients(!showIngredients)}>{showIngredients ? "Hide Ingredients" : "View Ingredients"} </Button> 
      <br/>
      {showIngredients && item.recipe.ingredientLines && item.recipe.ingredientLines.map((item, index)=>
        <p key={index}>{item}</p>
      )}
      <hr/><br/>
    </div>
  );
}

export default Recipe;
