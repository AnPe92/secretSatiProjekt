import { Text, View, StyleSheet, ImageBackground, Dimensions, SafeAreaView, StatusBar } from "react-native"

export default function Index() {
    return (
        <SafeAreaView style={styles.indexView} >

            <StatusBar animated={true} backgroundColor='#fff' barStyle="dark-content" />
            <ImageBackground
                source={require('../assets/IndexBackground.jpg')}
                resizeMode='stretch'
                style={styles.imagebackground}
            >
                <Text style={styles.text}> Hello </Text>
                <Text style={styles.text} > Let Jesus in, but don't forget the vaseline</Text>
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
    },
    imagebackground: {
        height: '100%',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "white"
    }
})