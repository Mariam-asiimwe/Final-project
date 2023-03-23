<<<<<<< Updated upstream
import {  createContext, useState } from "react";
=======
import {createContext, useState } from "react";
>>>>>>> Stashed changes

const RecipeContext = createContext();

const Provider = ({children})=> {
    const [recipes, setRecipes] = useState([])

    const initialState = {
        recipes,
        setRecipes
    }

    return (

        <RecipeContext.Provider value={initialState} >

            {children}
        </RecipeContext.Provider>
    )

}

export {Provider}

export default RecipeContext