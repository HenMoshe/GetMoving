import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import GymProvider from '../ContextAPI/GymsProvider';
import { Main } from './navigation/Main';
import  AppLoading  from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
  Inter_500Medium,
  Inter_400Regular
} from '@expo-google-fonts/inter';


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_500Medium,
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <>
    <GymProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Main />
      </NavigationContainer>
    </GymProvider>
    </>
  );
}
