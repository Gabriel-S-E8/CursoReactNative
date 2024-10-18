import React from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'


export default props => {
    return (
        <View style={style.botao}>
            <Button title='+' onPress={props.inc}/>
            <Button title='-' onPress={props.dec}/>
        </View>
    )
}

const style = StyleSheet.create({
    botao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})