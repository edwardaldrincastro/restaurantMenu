import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class ForgotPasswordModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions={
        header: null
    }
    render() {
        return (
            <View style={styles.modalContainer}>
            <TouchableOpacity>
                    <View>
                        <Icon name="md-close" size={25} color="#000" onPress={() => this.props.navigation.goBack()} />
                    </View>
                </TouchableOpacity>
                <View>

                <Text>FORGOT YOUR PASSWORD?</Text>
                
                <Text>Enter your email below to receive the instructions to reset your password</Text>
                </View>
                
            </View>
        );
    }
}

export default ForgotPasswordModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#fff'
    }

})