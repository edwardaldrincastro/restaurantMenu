import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
                    <Text style={{ color: "#fff" }}>RestaurantsList</Text>

                    <View style={{
                        flex: 1,
                    }}>
                        <ScrollView>
                            <View style={{
                                width: '90%', height: 300, backgroundColor: 'red',

                            }}>
                                < Text > picture</Text>
                            </View>
                            <View style={{
                                width: '90%', height: 300, backgroundColor: 'red',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                < Text > picture</Text>
                            </View>
                        </ScrollView>

                    </View>
                </View>
            </View >
        );
    }
}

export default RestaurantsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
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