
import React from 'react';
import './App.scss';
import Footer from './Components/Pages/Footer';
import RecipeNavbar from "./Components/RecipeNavbar";
import RecentRecipes from './Components/RecentRecipes';
import { Container } from 'react-bootstrap';
import Background from './Components/Images/background4.jpg'


function App() {



  return (



    <div className="App">
      
     
       <div style={{backgroundImage: `url(${Background})`,minHeight: '100vh', backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
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



