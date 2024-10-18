import React from 'react'
import { Text, View, Button } from 'react-native'
import estilo from './estilo'

export default ({num = 0}) => {
        return (
            <View>
                <Text style={estilo.fontG}>
                    O Resultado é:
                </Text>
                {num % 2 === 0 ? (
                    <Text style={estilo.fontG}>
                        Par
                    </Text>
                ):(
                    <Text style={estilo.fontG}>
                        Impar
                    </Text>
                )}
            </View>
        )
}