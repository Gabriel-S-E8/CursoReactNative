import React from 'react'
import { Text, View, Button } from 'react-native'
import estilo from '../estilo'

export default props => {

    const gerarNumero = (min, max) => {
        const fator = max - min +1
        return parseInt(Math.random() * fator) + min
    }
    return (
        <Button
            title='Executar'
            onPress={() => {
                const n =gerarNumero(props.min, props.max)
                props.funcao(n)
            }}
        />
    )
}