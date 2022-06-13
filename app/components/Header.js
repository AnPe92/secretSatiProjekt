import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View>
            <Text style={styles.titleText} >Jeeeesssuuuussssssss</Text>
            {/* hamburgermeny */}

        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        //height: "auto"
    },
    titleText: {
        color: 'white'
    }
})



