import React from "react";
import { Row } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LikedRecipe from './LikedRecipe'
import { useState, useContext } from 'react';
import RecipeContext from "../Context/recipeContext";
import Recipe from './Recipe';



function RecentRecipes() {
  const [liked, setLiked] = useState(true);
  const ctx = useContext(RecipeContext)

  return (
    <section id="recent-recipes">
      <div className="container text-center">
        <h2 style={{fontStyle:'monaco',fontSize: '80px', color: 'rgba(16,17,15,1)',padding: '10px 0', marginTop:'0'}}>Recipes</h2>
      </div>
      <Row>
        {ctx.recipes && ctx.recipes.map((item) => {
          return (
            <Card style={{ borderReadius:'30px',width: '25rem', margin: '20px', backgroundColor:'rgb(227, 234, 238, 0.53' }} key={item.recipe.label}>
              
              <Card.Body>
               
              <Recipe key={item} item={item}></Recipe>
              </Card.Body>
            </Card>
          )
        })}
        
      </Row>
      <LikedRecipe liked={liked} setLiked={setLiked}> </LikedRecipe>
    </section>
  )
}

export default RecentRecipes;



/* let apiUrl = "https://api.edamam.com/api/recipes/v2?type=public&app_id=25373478&apiKey=d7cbf056cc18d4141af4063adcd2a63a"; */
