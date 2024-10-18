import React from 'react'
import { Text, View, Button, StyleSheet} from 'react-native'


export default props => {
    return (
        <View style={{
            width: 50,
            height: 50,
            backgroundColor: props.cor ||'#000'
            }}>
            
        </View>
    )
}

