import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import { View, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen
            name='Home'
            component={Home}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return (
                        <View style={{paddingTop: 12, alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/home.png")}
                                style={{width:20, height:20, tintColor: "#0077b6"}}
                                />
                        </View>
                    )
                }
            }}
        />
        <Tab.Screen
            name='Menu'
            component={Menu}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return (
                        <View style={{paddingTop: 12, alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/trend.png")}
                                style={{width:20, height:20, tintColor: "#0077b6"}}
                                />
                        </View>
                    )
                }
            }}
        />
        <Tab.Screen
            name='Search'
            component={Search}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return (
                        <View style={{paddingTop: 12, alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                // source={{uri:"https://www.flaticon.com/free-icons/search"}}
                                source={require("../assets/icons/search.png")}
                                style={{width:20, height:20, tintColor: "#0077b6"}}
                                />
                        </View>
                    )
                }
            }}
        />
        <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                headerShown:false,
                tabBarIcon: () => {
                    return (
                        <View style={{paddingTop: 12, alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require("../assets/icons/user.png")}
                                style={{width:20, height:20, }}
                                />
                        </View>
                    )
                }
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabs