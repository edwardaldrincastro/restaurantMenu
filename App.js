import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import NearbyTabNavigator from "./src/navigators/nearbyTabNavigator";
import LandingScreen from "./src/screens/LandingScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ForgotPasswordModal from "./src/components/forgotPasswordModal";
// import ModalStackNavigator from "./src/navigators/ModalStack";

export default class App extends Component {
  render() {
    return (
      <SwitchNav />
    );
  }
}
const AuthStackNavigator = createStackNavigator({
  Landing: LandingScreen,
  SignIn: SignInScreen,
  Register: RegisterScreen,
  ForgotModal: ForgotPasswordModal,
}, {
    navigationOptions: {
      header: (
        <View style={{width: '100%', height: 40, backgroundColor: '#f4511e',}}></View>
      ),
      headerLeft: (
        <Icon name="md-arrow-back" size={25} color="#000" onPress={() => this.props.navigation.goBack()} />
                            
      ),

    }
  },
  {
    initialRouteName: 'Landing'
  })
const SwitchNav = createSwitchNavigator({
  App: AuthStackNavigator,
  Entry: NearbyTabNavigator,
},
  {
    initialRouteName: 'App'
  });



