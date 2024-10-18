import React from 'react';
import { Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    button: {
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').width / 4,
        fontSize: 40,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#FFF',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
});

export default (props) => {
    const stylesButton = [styles.button];

    if (props.double) stylesButton.push(styles.buttonDouble);
    if (props.triple) stylesButton.push(styles.buttonTriple);
    if (props.operation) stylesButton.push(styles.operationButton);

    return (
        <TouchableHighlight onPress={()=> props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
};
