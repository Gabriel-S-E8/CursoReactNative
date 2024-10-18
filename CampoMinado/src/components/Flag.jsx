import React from "react";
import { StyleSheet, Text, View } from "react-native";
import params from "../params";

export default (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.flagpole}/>
            <View style={styles.flag}/>
            <View style={styles.flagbase1}/>
            <View style={styles.flagbase2}/>
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

})