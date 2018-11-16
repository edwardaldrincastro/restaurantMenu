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
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ width: "100%", height: "100%", backgroundColor: "#eee" }}>
                        <View style={styles.modalContainer}>
                            <Text>inside modal</Text>
                            <TouchableOpacity>
                                <View>
                                    <Icon name="md-close" size={25} color="#000" onPress={() => this.modalCLose()} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default ForgotPasswordModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }

})