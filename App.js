import { StyleSheet, Text, View } from 'react-native';
import Index from './app/views/Index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Calculator from './app//views/Calculator'


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Index'>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//<View style={styles.container}>
//<Index style={styles.indexStyle} />
//</View >

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  indexStyle: {

  },
  // statusbarStyle: {
  //   style: 'auto',
  //   backgroundColor: 'brown'
  // }
});
