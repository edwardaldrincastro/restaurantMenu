import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Header } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";


class RestaurantsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <View style={{ flex: 1 }}>
                {/* <Header style={{ backgroundColor: "#00BD57" }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <View style={styles.icon}>
                            <View style={{ justifyContent: 'flex-start', alignContent: 'center' }}>
                                <Icon name="md-menu" size={25} color="#fff" onPress={() => alert('menu')} />
                            </View>
                        </View>
                        <View style={styles.title}>
                            <View style={{ backgroundColor: "#00BD57" }}>
                                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Restaurants Nearby</Text>
                            </View>
                        </View>
                        <View style={styles.icon}>
                            <View style={{ justifyContent: 'flex-end', alignContent: 'center' }}>
                                <Icon name="md-cart" size={25} color="#fff" onPress={() => alert('cart')} />
                            </View>
                        </View>
                    </View>
                </Header> */}
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.insideScrollContainer}>
                            <View style={styles.restaurantHolder}>
                                <View style={styles.imageHolder}>
                                    <ImageBackground source={require('../../assets/burger.jpg')} style={{
                                        width: '100%',
                                        height: '100%'
                                    }} />
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <View style={styles.name}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Marmalade Burger Cafe</Text>
                                        <Text style={{ fontSize: 12 }}>Hamburgers</Text>
                                    </View>
                                    <View style={styles.readyButton}>
                                        <View style={styles.ready}>
                                            <Text style={{ color: '#00b0ff', fontSize: 10 }}>Ready in 25Min</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.insideScrollContainer}>
                            <View style={styles.restaurantHolder}>
                                <View style={styles.imageHolder}>
                                <ImageBackground source={require('../../assets/pizza.jpg')} style={{
                                        width: '100%',
                                        height: '100%'
                                    }} />
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <View style={styles.name}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Le Pizza de Las Tomato</Text>
                                        <Text style={{ fontSize: 12 }}>Pizza</Text>
                                    </View>
                                    <View style={styles.readyButton}>
                                        <View style={styles.ready}>
                                            <Text style={{ color: '#00b0ff', fontSize: 10 }}>Ready in 35Min</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.insideScrollContainer}>
                            <View style={styles.restaurantHolder}>
                                <View style={styles.imageHolder}>
                                <ImageBackground source={require('../../assets/omelette.jpg')} style={{
                                        width: '100%',
                                        height: '100%'
                                    }} />
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <View style={styles.name}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Yukihira Diner</Text>
                                        <Text style={{ fontSize: 12 }}>Snacks</Text>
                                    </View>
                                    <View style={styles.readyButton}>
                                        <View style={styles.ready}>
                                            <Text style={{ color: '#00b0ff', fontSize: 10 }}>Ready in 25Min</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </View >
        );
    }
}

export default RestaurantsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    insideScrollContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    restaurantHolder: {
        width: "90%",
        height: 200,
        backgroundColor: '#fff',
        marginBottom: 10
    },
    imageHolder: {
        width: "100%",
        height: 160,
        backgroundColor: '#f4511e',
    },
    name: {
        width: "60%",
        justifyContent: 'center',
        marginLeft: 10,
        flexDirection: 'column',
        backgroundColor: "#fff"
    },
    ready: {
        width: "100%",
        height: 35,
        borderWidth: 1,
        borderColor: '#00b0ff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    readyButton: {
        width: "35%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    icon: {
        width: '10%',
        backgroundColor: '#00BD57',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: '80%',
        backgroundColor: '#00BD57',
        justifyContent: 'center',
        alignItems: 'center'
    }

});