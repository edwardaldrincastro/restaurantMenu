import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "react-navigation";


class RestaurantsNearby extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: "#00BD57" }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ width: '10%', backgroundColor: '#00BD57', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'flex-start', alignContent: 'center' }}>
                                <Icon name="md-menu" size={25} color="#fff" onPress={() => alert('menu')} />
                            </View>
                        </View>
                        <View style={{ width: '80%', backgroundColor: '#00BD57', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: "#00BD57" }}>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Restaurants Nearby</Text>
                            </View>
                        </View>
                        <View style={{ width: '10%', backgroundColor: '#00BD57', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'flex-end', alignContent: 'center' }}>
                                <Icon name="md-cart" size={25} color="#fff" onPress={() => alert('cart')} />
                            </View>
                        </View>
                    </View>
                </Header>
                <View style={styles.container}>
                    <Text>RestaurantsNearby</Text>
                </View>
            </View >
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
    }
});