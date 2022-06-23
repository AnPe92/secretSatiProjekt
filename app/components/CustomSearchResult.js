import { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import { Text, Pressable, View, FlatList } from "react-native";



export default function CustomSearchResult({ recipeData }) {

    console.log(recipeData + " Should look like this muyddafakkkakakak")

    const renderItem = ({ item }) => {
        return (
            <DisplayComponent
                itemName={item[0]}
                itemAmount={item[1]}
            />
        )
    }

    if (recipeData.length < 1) {
        return (
            <Text>MAke a ChoiCe</Text>
        )
    } else {

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
}