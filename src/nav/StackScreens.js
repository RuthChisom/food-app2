import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={BottomTabs}/>
    </Stack.Navigator>
  )
}

export default StackScreens