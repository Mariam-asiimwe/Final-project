
import React from 'react';
import './App.scss';
import Footer from './components/Pages/Footer';
import RecipeNavbar from "./components/RecipeNavbar";
import RecentRecipes from './components/RecentRecipes';
import { Container } from 'react-bootstrap';
import Background from './components/Images/background2.jpg'


function App() {



  return (



    <div className="App">
      
     
       <div style={{backgroundImage: `url(${Background})`}}>
       <RecipeNavbar/>

       <Container >
        
       <RecentRecipes />
       </Container>
       
       </div>
      <Footer/>
    </div>
  );

}

export default App;



