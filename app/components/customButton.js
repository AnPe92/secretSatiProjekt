
import { Pressable, Text, View, StyleSheet } from "react-native";

export default function ChoiceButton({ buttonTitle }) {
    return (
        <View>
            <Pressable style={styles.choiceButton} onPress={() => {
                console.log(buttonTitle + " Has been pressed!")
            }}
            >
                <Text>{buttonTitle}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    choiceButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        height: '50px',
        width: '100px',
        backgroundColor: 'green',
    },
})