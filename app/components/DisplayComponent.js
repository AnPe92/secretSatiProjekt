import { Text, View, Pressable } from 'react-native'
import { useState } from 'react';
import { data } from "../models/Resources";
import CustomSearchResult from './customSearchResult';



export default function DisplayComponent({ itemName, itemAmount }) {

    const runAll = () => {
        handleSetShow();
        handleSetClickedComponent();
    }

    const [show, setShow] = useState(false)
    const handleSetShow = () => setShow(!show)

    const [clickedComponent, setClickedComponent] = useState([]);
    const handleSetClickedComponent = () => { addComponent(); console.log(clickedComponent + " clickedcompepepepepepepepepeppepe") }

    const addComponent = () => {
        data.recipes.filter((item) => {
            console.log(item + " this is item console right now !!")
            if (item.key_l == itemName) {

                setClickedComponent(item.value)


            }
        })

    }

    return (
        <Pressable
            onPress={runAll}
        >
            <View>
                <Text>{itemName}</Text>
                <Text>{itemAmount}</Text>
                {show && <DisplayComponent itemName={clickedComponent} />}

            </View>
        </Pressable>

    )

}



