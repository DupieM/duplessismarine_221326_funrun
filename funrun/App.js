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
import { auth, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import ContestantScreen from './screens/ContestantScreen';
import JudgingScreen from './screens/JudgingScreen';
import ManagementScreen from './screens/ManagementScreen';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Itim':require('./assets/fonts/Itim-Regular.ttf'),
    'PoetsenOne':require('./assets/fonts/PoetsenOne-Regular.ttf'),
  })

  const [loggedIn, setLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
        // get with email (Where function)
        // const userDoc = query(await getDoc(doc(db, "users"), where("email", "==", user.email)));
        const q = query(collection(db, "users"), where("email", "==", user.email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            setIsAdmin(doc.data().isAdmin);
            console.log("Admin status: ", doc.data().isAdmin);
          });
        } else {
          console.log("No such document!");
          setIsAdmin(false);
        }

        setLoggedIn(true)
        console.log("User logged in... " + user.email)

        } catch (error) {
          console.error("Error fetching user document: ", error);
        }
        

        // if (userDoc.exists()) {
        //   setIsAdmin(userDoc.data().isAdmin);
        //   console.log("Admin status: ", userDoc.data().isAdmin);
        // } else {
        //   console.log("No such document!");
        //   setIsAdmin(false);
        // }

        
        
        
      } else {
        setLoggedIn(false)
        setIsAdmin(false)
        console.log("No user logged in...")
      }  
    })

    return unsubscribe

  }, [])

  //old code for role based login
  
  // const [loggedIn, SetLoggedIn] = useState(false)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       SetLoggedIn(true)
  //       console.log("User logged in... " + user.email)
  //     } else {
  //       SetLoggedIn(false)
  //       console.log("No user logged in...")
  //     }  
  //   })

  //   return unsubscribe

  // }, [])

  // const [isAdmin, setIsAdmin] = useState(false)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setIsAdmin(false)
  //       console.log(isAdmin) 
  //     } else {
        
  //     }  
  //   })

  //   return unsubscribe

  // }, []) 

  return (
    <>
      { loggedIn ? (
        <>
          { isAdmin ? (
            <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Home" component={CompetitionScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({}) =>  (
                  <Ionicons name="home" color={'blue'} size={32} />
                )
              }}/>
              <Tab.Screen name="Contestant" component={ContestantScreen}
            options={{
              tabBarLabel: 'Contestant',
              tabBarIcon: ({}) =>  (
                <Ionicons name="people" color={'blue'} size={32} />
              )
            }}/>
            <Tab.Screen name="Judging" component={JudgingScreen}
            options={{
              tabBarLabel: 'Judging',
              tabBarIcon: ({}) =>  (
                <Ionicons name="time" color={'blue'} size={32} />
              )
            }}/>
            <Tab.Screen name="Management" component={ManagementScreen}
            options={{
              tabBarLabel: 'Management',
              tabBarIcon: ({}) =>  (
                <Ionicons name="clipboard" color={'blue'} size={32} />
              )
            }}/>
            </Tab.Navigator>
            </NavigationContainer>
        ) : (
          <NavigationContainer>
          <Tab.Navigator 
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#194D10',
              height: 55,
              borderTopWidth: 0,
              padding: 3,
              paddingBottom: 3
          },
        })}>
            <Tab.Screen name="Home" component={CompetitionScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({}) =>  (
                <Ionicons name="home" color={'#FFA948'} size={32} />
              )
            }}/>
            <Tab.Screen name="Entry" component={EntryScreen}
              options={{
                tabBarLabel: 'Enter',
                tabBarIcon: ({}) =>  (
                  <Ionicons name="enter" color={'#FFA948'} size={32} />
                )
              }}/>
              <Tab.Screen name="Results" component={ResultScreen}
              options={{
                tabBarLabel: 'Results',
                tabBarIcon: ({}) =>  (
                  <Ionicons name="trophy" color={'#FFA948'} size={32} />
                )
              }}/>
              <Tab.Screen name="Profile" component={ProfileScreen}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({}) =>  (
                  <Ionicons name="person" color={'#FFA948'} size={32} />
                )
              }}/>
          </Tab.Navigator>
          </NavigationContainer>
        )}
      </>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LogInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
