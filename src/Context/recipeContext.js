import {  createContext, useState } from "react";

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