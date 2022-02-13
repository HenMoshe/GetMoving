import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../screens/HomePage';
import  SingleGym  from '../screens/SingleGym';
import EnteringPage from '../screens/EntringPage';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator
  
  screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  >
    <MainStack.Screen 
      name='Get Moving!' 
      component={EnteringPage}
      />
    <MainStack.Screen 
      name="Search results:" 
      component={HomePage} 
      />
    <MainStack.Screen
      name="Location details"
      component={SingleGym}
    />
  </MainStack.Navigator>
);
