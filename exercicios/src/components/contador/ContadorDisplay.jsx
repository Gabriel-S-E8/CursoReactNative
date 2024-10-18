import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <View style={style.display}>
            <Text style={[estilo.fontG, style.displayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    display: {
        backgroundColor: '#302b2b',
        padding: 10,
        width: 200,
    },
    displayText: {
        color: '#fff'
    }
})