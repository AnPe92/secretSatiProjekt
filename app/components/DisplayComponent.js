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
        console.log(recipes + "this is whjat im looking for right now biatch")
        recipes.filter((item) => {
            console.log(item + " this is item console right now !!" + itemName + " <---------this is itemname rughtuerheurh reureruyea")
            if (item.key_l === itemName) {

                setClickedComponent(item.value)


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
                {show && <DisplayComponent itemName={clickedComponent[0]} itemAmount={clickedComponent[1]} />}

            </View>
        </Pressable>

    )

}



