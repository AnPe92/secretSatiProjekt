import { useState } from "react";
import { View, Text } from "react-native"
import Select from 'react-select'
import { data } from "../models/Resources"
import ChoiceButton from "../components/CustomButton";
import CustomSearchResult from "../components/CustomSearchResult";


export default function Calculator() {

    const { recipes } = data
    const [recipeChoosen, setRecipeChoosen] = useState([])
    const handleRecipeChoice = (recipe) => { setRecipeChoosen(recipe); console.log(recipeChoosen + " <- recipe choosen") }




    return (
        <View>
            <ChoiceButton buttonTitle="Machines" />
            <ChoiceButton buttonTitle="Recipes" />
            <Select
                options={recipes}
                onChange={handleRecipeChoice}
            />
            <CustomSearchResult
                recipeData={recipeChoosen}
            />
        </View>
    )
}
