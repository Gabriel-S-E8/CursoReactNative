import React, {useState} from 'react'
import { Text, View, Button, TextInput, } from 'react-native'
import estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View style={estilo.fontG}>
            <Text>{nome}</Text>
            <TextInput
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}