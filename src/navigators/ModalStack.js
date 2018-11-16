import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SignInScreen from "../screens/SignInScreen";
import ForgotPasswordModal from "../components/forgotPasswordModal";
import { createStackNavigator } from "react-navigation";
class ModalStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ModalStack/>
    );
  }
}

const ModalStack = createStackNavigator({
    SignIn: SignInScreen,
    MyModal: ForgotPasswordModal,
  },{
  navigationOptions: {
       header: null,
       mode: 'modal',
    }
  })
  
export default ModalStack;
