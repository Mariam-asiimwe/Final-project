import React from "react";
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LikedRecipe from './LikedRecipe'
import { useState } from 'react';

function RecentRecipes() {
  const [liked, setLiked] = useState(true);
  
  
  return (
    <section id="recent-recipes">
      <div className="container text-center">
        <h3>Recent Recipes</h3>
      </div>
      <Row>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="{item.recipe.image}" />
          <Card.Body>
            <Card.Title>Recipe name</Card.Title>
            <Button a href="{}">Click for video</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="{item.recipe.image}" />
          <Card.Body>
            <Card.Title>Recipe name</Card.Title>
            <Button a href="{}">Click for video</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="{item.recipe.image}" />
          <Card.Body>
            <Card.Title>Recipe name</Card.Title>
            <Button a href="{}">Click for video</Button>
          </Card.Body>
        </Card>
      </Row>
      <LikedRecipe liked={liked} setLiked={setLiked}> </LikedRecipe>
    </section>
  )
}

export default RecentRecipes;



/* let apiUrl = "https://api.edamam.com/api/recipes/v2?type=public&app_id=25373478&apiKey=d7cbf056cc18d4141af4063adcd2a63a"; */