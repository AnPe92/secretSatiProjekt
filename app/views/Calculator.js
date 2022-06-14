import { useState } from "react";
import { View, Text, TextInput, } from "react-native"
import Select from 'react-select'
import { machines, options } from "../assets/objectTemplate";

const { miner } = machines

export default function Calculator() {

    return (
        <View>
            <Select options={machines} />
            <Text>Not jesus</Text>
        </View>
    )
}