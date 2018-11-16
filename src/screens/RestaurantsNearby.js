import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Left } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";


class RestaurantsNearby extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text> RestaurantsNearby </Text>
                </View>
            </View>
        );
    }
}

export default RestaurantsNearby;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

});
