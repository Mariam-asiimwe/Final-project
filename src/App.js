
import React from 'react';
import './App.scss';
import Footer from './Components/Pages/Footer';
import RecipeNavbar from "./Components/RecipeNavbar";
import RecentRecipes from './Components/RecentRecipes';


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



