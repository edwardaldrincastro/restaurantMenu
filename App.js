import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import LandingScreen from "./src/screens/LandingScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SignInScreen from "./src/screens/SignInScreen";
import RestaurantsNearby from "./src/screens/RestaurantsNearby";
import ForgotPasswordModal from "./src/components/forgotPasswordModal";
import ModalStack from "./src/navigators/ModalStack";

export default class App extends Component {
  render() {
    return (
      <SwitchNav/>
    );
  }
}

const AuthStack = createStackNavigator({
  Landing: LandingScreen,
  SignIn: ModalStack,
  Register: RegisterScreen,
},{
navigationOptions: {
     header: null
  }
})

const SwitchNav = createSwitchNavigator({
  App: AuthStack,
  Entry: RestaurantsNearby,
},
  {
    initialRouteName: 'App'
  });


