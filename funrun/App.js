import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LogInScreen}  options={{
          headerStyle: {
            backgroundColor: '#7A9966',
          },
          headerTintColor: '#FFA948',
          headerTitleStyle: {
            fontWeight: '800',
          },
        }}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{
          headerStyle: {
            backgroundColor: '#7A9966',
          },
          headerTintColor: '#FFA948',
          headerTitleStyle: {
            fontWeight: '800',
          },
        }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    // <LogInScreen/>
    // <SignUpScreen/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    backgroundColor: 'red',
    fontSize: 10
  }
});
