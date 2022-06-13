import { useState } from "react"
import { Text, View, StyleSheet, ImageBackground, Dimensions, SafeAreaView, StatusBar, Button } from "react-native"
import Header from "../components/Header"

export default function Index({ navigation }) {
    return (
        <SafeAreaView style={styles.indexView} >

            <StatusBar animated={true} backgroundColor='#fff' barStyle="dark-content" />
            <ImageBackground
                source={require('../assets/IndexBackground.jpg')}
                resizeMode='stretch'
                style={styles.imagebackground}
            >
                <View style={{ margin: 10 }} >
                    <View style={{ margin: 10 }} >
                        <View style={styles.headerView}>
                            <Header style={styles.header} />
                        </View>
                    </View>
                </View>
                <View style={styles.textContainer} >
                    <Text style={styles.text}> Hello </Text>
                    <Text style={styles.text}> Let Jesus in, but don't forget the vaseline</Text>
                </View>
                <Button title="KNAPP"
                    onPress={() => { navigation.navigate('Calculator') }} />

            </ ImageBackground >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    indexView: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        borderWidth: 1,
    },
    imagebackground: {
        height: '100%',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "white",
        flex: 1,
        justifyContent: 'center'
    },
    headerView: {
        flex: 1,
        justifyContent: 'center',
        color: 'white',
        borderWidth: 1,
        margin: 40,
        height: "40vh"
    },
    textContainer: {
        borderWidth: 5,
    }
})