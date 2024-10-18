import React from 'react'
import { Text, View, Button } from 'react-native'
import estilo from './estilo'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return ( 
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={estilo.fontG}>
                    Usuário Logado: 
                </Text>
                <Text style={estilo.fontG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}