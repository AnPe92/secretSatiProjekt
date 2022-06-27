<<<<<<< Updated upstream
import { Text, Pressable, View, FlatList } from "react-native";
import { data } from "../models/Resources"
=======
import { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import { Text, Pressable, View, FlatList, StyleSheet } from "react-native";
>>>>>>> Stashed changes

export default function CustomSearchResult({ recipe }) {

    const handleOnpressIngridients = (ingridient) => {
        for (x in data) {
            data.name === ingridient ? console.log("found it") : console.log("errrrrrrrrrrrror");
        }
    }

<<<<<<< Updated upstream
    const renderMaterials = ({ item: recipe }) => {
        return (
            <View>
                <Pressable
                    onPress={() => console.log(recipe)}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{recipe}</Text>
                </Pressable>
            </View>
=======
export default function CustomSearchResult({ recipeData }) {

    console.log(recipeData.value + " Should look like this muyddafakkkakakak")


    

    const renderItem = ({ item }) => {
        return (
            
            <DisplayComponent
                itemName={item[0]}
                itemAmount={item[1]}
            />
            
>>>>>>> Stashed changes
        )
    }

    if (recipe.length > 1) {

        return (
            <View>
                <FlatList
                    data={recipe}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderMaterials} />
            </View>
        )

<<<<<<< Updated upstream
    } else {
        return (
            <Text>Please choose something dickhead</Text>
        )
    }
}
=======
    return (
        <View style={{borderColor:'black'}} >
            <FlatList
            
                data={recipeData.value}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchResult: {
        flex: 1,
        backgroundColor: 'green',
        height: '20%', 
        width: '40%',
        padding: 10,

    }
})
>>>>>>> Stashed changes
