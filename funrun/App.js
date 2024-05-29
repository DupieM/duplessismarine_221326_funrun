import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CompetitionScreen from './screens/CompetitionScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EntryScreen from './screens/EntryScreen';
import ResultScreen from './screens/ResultScreen';
import ProfileScreen from './screens/ProfileScreen';
import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Item':require('./assets/fonts/Itim-Regular.ttf'),
    'PoetsenOne':require('./assets/fonts/PoetsenOne-Regular.ttf'),
  })

  const [loggedIn, SetLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        SetLoggedIn(true)
        console.log("User logged in... " + user.email)
      } else {
        SetLoggedIn(false)
        console.log("No user logged in...")
      }  
    })

    return unsubscribe

  }, [])
  
  return (
    <>
      {loggedIn ? (
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={CompetitionScreen}/>
            <Tab.Screen name="Entry" component={EntryScreen}/>
            <Tab.Screen name="Results" component={ResultScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LogInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
          </Stack.Navigator>
      </NavigationContainer>
      )}
    </>



    // <View style={styles.container}>
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
    //       <Stack.Screen name="Login" component={LogInScreen}/>
    //       <Stack.Screen name="SignUp" component={SignUpScreen}/>
    //       <Stack.Screen name="Root" component={Root}/>
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
