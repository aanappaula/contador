import { StatusBar } from 'expo-status-bar';
import Counter from './src/components/Counter';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <Counter />
     <Counter />
     <Counter />
     <Counter />
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
});
