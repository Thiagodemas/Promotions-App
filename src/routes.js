import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const AppStack = createStackNavigator();

import List from './pages/Main/index';
import Detail from './pages/Detail/index';

export default function routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="List" component={List}/>
        <AppStack.Screen name="Detail" component={Detail}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
