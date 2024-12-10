import React, {Component} from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';


export default class AuthOrApp extends Component {

    async componentDidMount() {
        const userDataJson = await AsyncStorage.getItem('userData');
        let userData = null;

        try {
            userData = JSON.parse(userDataJson);
        } catch (e) {
            // userData está inválido
        }

        if (userData && userData.token) {
            axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`
            // this.props.navigation.navigate('Home', userData)
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Home',
                            params: userData,
                        },
                    ],
                })
            );
        } else {
            // this.props.navigation.navigate('Auth')
            this.props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Login',
                        },
                    ],
                })
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
    }
})