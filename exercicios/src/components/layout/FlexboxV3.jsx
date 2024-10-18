import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.flexV3}>
            <Quadrado cor="#9939c5" />
            <Quadrado cor="#cbdb36" />
            <Quadrado cor="#44db44" />
            <Quadrado cor="#324eca" />
            <Quadrado cor="#df5252" />
        </View>
    );
};


const style = StyleSheet.create({
    flexV3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    }
})