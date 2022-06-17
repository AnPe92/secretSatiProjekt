import { useState } from "react";
import { View, Text, TextInput, } from "react-native"
import Select from 'react-select'
import { machines, options } from "../assets/objectTemplate";
import { findAll, insert } from "../database/DbUtils";
import Machines from "../models/Machines";
import ChoiceButton from "../components/customButton";

export default function Calculator() {

    const { miner } = machines
    const [machineChoosen, setMachineChoosen] = useState()
    const handleMachineChoice = (value) => console.log(value.label);

    console.log(findAll)

    return (
        <View>
            <ChoiceButton buttonTitle="Machines" />
            <ChoiceButton buttonTitle="Components" />
            <Select
                options={machines}
                onChange={handleMachineChoice}
            />

            <Text>Not jesus</Text>
        </View>
    )
}
