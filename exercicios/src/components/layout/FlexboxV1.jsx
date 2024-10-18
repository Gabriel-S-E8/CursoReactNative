import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.flexV1}>
            <Quadrado cor="#9939c5" />
            <Quadrado cor="#cbdb36" />
            <Quadrado cor="#44db44" />
            <Quadrado cor="#324eca" />
            <Quadrado cor="#df5252" />
        </View>
    );
};


const style = StyleSheet.create({
    flexV1: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
    }
})