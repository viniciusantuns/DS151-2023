import { StyleSheet} from 'react-native';
import Form from './src/components/Form';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import CounterScreen from './src/components/CounterScreen';
import ColorListScreen from './src/components/ColorListScreen';
import GaleryScrenn from './src/components/GaleryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Media" component={Form}/>
        <Stack.Screen name="Counter" component={CounterScreen}/>
        <Stack.Screen name="ColorList" component={ColorListScreen}/>
        <Stack.Screen name="Galery" component={GaleryScrenn}/>
    </Stack.Navigator>
  </NavigationContainer>
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
