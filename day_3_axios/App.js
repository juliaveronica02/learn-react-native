import React from 'react';
import { Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from './components/homeScreen'
import HomeScreen from "./components/homeScreen2"
import Playing from "./components/playingMovie/playing"
import Search from "./components/SearchMovie/search"

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Playing" component={Playing} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};


export default App;
