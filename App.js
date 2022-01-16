import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';

import DailyLog from './DailyLog';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  LoginScreen: {
    screen: LoginScreen
  },
  DailyLog: {
    screen: DailyLog
  }
});

const AppContainer = createAppContainer(AppNavigator);


//const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

//export default App;

