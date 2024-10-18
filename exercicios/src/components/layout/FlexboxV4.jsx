import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.flexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    );
};


const style = StyleSheet.create({
    flexV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000',
    },
    V0: {
        backgroundColor: '#cbdb36',
        height: 0,
    },
    V1: { 
        backgroundColor: '#9939c5',
        flexGrow: 1,
    },
    V2: {
        backgroundColor: '#44db44',
        flexGrow: 1,
    }
})