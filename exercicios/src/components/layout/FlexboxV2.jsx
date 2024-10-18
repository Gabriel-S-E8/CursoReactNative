import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.flexV2}>
            <Quadrado cor="#9939c5" />
            <Quadrado cor="#cbdb36" />
            <Quadrado cor="#44db44" />
            <Quadrado cor="#324eca" />
            <Quadrado cor="#df5252" />
        </View>
    );
};


const style = StyleSheet.create({
    flexV2: {
        flexGrow: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#000',
    }
})