import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const AppStack = createStackNavigator();

import Main from './pages/Main/index';
import Profile from './pages/Profile/index';

export default function routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Main" component={Main}/>
        <AppStack.Screen name="Profile" component={Profile}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
