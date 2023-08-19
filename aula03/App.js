import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Form from './src/components/Form';
import Title from './src/components/Title';

export default function App() {
  return (
    <View style={styles.container}>
        <Title/>
        <StatusBar style="auto" />
        <Form/>
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
