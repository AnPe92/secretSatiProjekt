import { useState } from "react";
import { View, Text, TextInput, } from "react-native"
import Select from 'react-select'
import { machines, options } from "../assets/objectTemplate";
import { findAll, insert } from "../database/DbUtils";
import Machines from "../models/Machines";

export default function Calculator() {

    const { miner } = machines
    const [machineChoosen, setMachineChoosen] = useState()
    const handleMachineChoice = (value) => console.log(value.label);

    console.log(findAll)

    return (
        <View>
            <Select
                options={machines}
                onChange={handleMachineChoice}
            />
            <Text>Not jesus</Text>
        </View>
    )
}
