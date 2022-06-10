import { StyleSheet, Text, View } from 'react-native';
import Index from './app/views/Index';

export default function App() {
  return (


    <View style={styles.container}>
      <Index style={styles.indexStyle} />
    </View>
  );
}

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
