import React, { Component } from 'react';
import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import AuthStack from './src/navigators/AuthStack';
import { View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import NearbyTabNavigator from "./src/navigators/nearbyTabNavigator";
import LandingScreen from "./src/screens/LandingScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ForgotPasswordModal from "./src/components/forgotPasswordModal";

export default class App extends Component {
  render() {
    return (
      <SwitchNav />
    );
  }
}
const AuthStackNavigator = createStackNavigator({
  Landing: LandingScreen,
  SignIn: NearbyTabNavigator,
  // RestaurantsNearby: NearbySwitchNavigator,
  Register: RegisterScreen,
  ForgotModal: ForgotPasswordModal,
}, {
    navigationOptions: {
      // header: null,
      header: (
        <View style={{width: '100%', height: 40, backgroundColor: '#f4511e',}}></View>
      ),
      headerLeft: (
        <Icon name="md-arrow-back" size={25} color="#000" onPress={() => this.props.navigation.goBack()} />
                            
      ),
      mode: 'modal',

    }
  })

const SwitchNav = createSwitchNavigator({
  App: AuthStackNavigator,
  Entry: NearbyTabNavigator,
},
  {
    initialRouteName: 'App'
  });



