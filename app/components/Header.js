import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View  >
            <Text style={styles.titleText} >Jeeeesssuuuussssssss</Text>
            {/* hamburgermeny */}

        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderColor: 'white',
        borderWidth: 2,
        
        height: 25,
    },
    titleText: {
        color: 'white'
    }
})



