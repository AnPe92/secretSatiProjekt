import { Text, Pressable, View, FlatList } from "react-native";
import { data } from "../models/Resources"

export default function CustomSearchResult({ recipe }) {

    const handleOnpressIngridients = (ingridient) => {
        for (x in data) {
            data.name === ingridient ? console.log("found it") : console.log("errrrrrrrrrrrror");
        }
    }

    const renderMaterials = ({ item: recipe }) => {
        return (
            <View>
                <Pressable
                    onPress={() => console.log(recipe)}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 12 }}>{recipe}</Text>
                </Pressable>
            </View>
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

    } else {
        return (
            <Text>Please choose something dickhead</Text>
        )
    }
}