import React from "react";
import { StyleSheet, Text, View } from "react-native";
import params from "../params";

export default (props) => {
    return (
        <View style={styles.container}>
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]}/>
            <View style={[styles.flag, props.bigger ? styles.flagBigger : null]}/>
            <View style={[styles.flagbase1, props.bigger ? styles.base1Bigger : null]}/>
            <View style={[styles.flagbase2, props.bigger ? styles.base2Bigger : null]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 1,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#f22',
        marginLeft: 3,
    },
    flagbase1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,
    },
    flagbase2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16,
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3,
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12,
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginTop: 24,
        marginLeft: 8,
    },

})