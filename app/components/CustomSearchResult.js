import { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import { Text, Pressable, View, FlatList } from "react-native";



export default function CustomSearchResult({ recipeData }) {

    console.log(recipeData.value + " Should look like this muyddafakkkakakak")

    const renderItem = ({ item }) => {
        return (
            <DisplayComponent
                itemName={item[0]}
                itemAmount={item[1]}
            />
        )
    }



    return (
        <View>
            <FlatList
                data={recipeData.value}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
