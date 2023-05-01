// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import StackScreens from '../food-app2/src/nav/StackScreens';
import BottomTabs from './src/nav/BottomTabs';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackScreens/> */}
      <BottomTabs/>
    </NavigationContainer>
  );
}
