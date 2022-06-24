import { Text, View, Pressable } from 'react-native'
import { useState } from 'react';
import { data } from "../models/Resources";
import CustomSearchResult from './customSearchResult';



export default function DisplayComponent({ itemName, itemAmount }) {

    const { recipes } = data;

    const runAll = () => {
        handleSetShow();
        handleSetClickedComponent();
    }

    const [show, setShow] = useState(false)
    const handleSetShow = () => setShow(!show)

    const [clickedComponent, setClickedComponent] = useState([]);
    const handleSetClickedComponent = () => { addComponent(); console.log(clickedComponent + " clickedcompepepepepepepepepeppepe") }

    const addComponent = () => {
        recipes.filter((item) => {

            if (item.key_l === itemName) {

                setClickedComponent(item)
            }
        })

    }




    // fixa hur data skickas med <--------------------------

    return (
        <Pressable
            onPress={runAll}
        >
            <View>
                <Text>{itemName}</Text>
                <Text>{itemAmount}</Text>
                <CustomSearchResult
                    recipeData={clickedComponent}
                />

            </View>
        </Pressable>

    )

}



