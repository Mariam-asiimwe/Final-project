
import React from 'react';
import './App.scss';
import Footer from './components/Pages/Footer';
import RecipeNavbar from "./components/RecipeNavbar";
import RecentRecipes from './components/RecentRecipes';


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



