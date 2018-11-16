import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class ForgotPasswordModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }
    modalCLose = () => {
        alert("modal close")
    }
    modalHandler = () => {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <View style={styles.modalContainer}>
                <Text>inside modal</Text>
                <TouchableOpacity>
                    <View>
                        <Icon name="md-close" size={25} color="#000" onPress={() => this.props.navigation.goBack()} />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ForgotPasswordModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'red'
    }

})