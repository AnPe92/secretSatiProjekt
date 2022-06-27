import React, { useState, Component, Fragment } from "react";
import { View, Text, StyleSheet } from "react-native"
import Select, {createFilter} from 'react-select'
import { data } from "../models/Resources"
import CustomSearchResult from "../components/CustomSearchResult";


export default function Calculator() {

    const { recipes } = data
<<<<<<< Updated upstream
    const [recipeChoosen, setRecipeChoosen] = useState('')
    const handleRecipeChoice = (choice) => setRecipeChoosen(choice.value)


=======
    const [recipeChoosen, setRecipeChoosen] = useState([])
    const handleRecipeChoice = (recipe) => { setRecipeChoosen(recipe); console.log(recipeChoosen + " <- recipe choosen") }
   
>>>>>>> Stashed changes


    return (
        <View>
            
            <Select
                options={recipes}
                onChange={handleRecipeChoice}
            />
<<<<<<< Updated upstream
            <CustomSearchResult recipe={[...recipeChoosen]} />


=======
            <View>
                <CustomSearchResult
                     recipeData={recipeChoosen}
                />
            </View>
>>>>>>> Stashed changes
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
    },
    searchResult: {
        flex: 1,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'black',
        height: 25,
        width: 500,
        marginTop: 10,
        borderRadius: 5,
    },
    empty: {
        height: '40%'
    }
})
