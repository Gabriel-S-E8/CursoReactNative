import React from 'react'
import { Text, View, Button } from 'react-native'
import estilo from '../estilo'
import Filho from './Filho'

export default props => {
    return (
        <>
            <Text>Membros da Familia:</Text>
            {props.children}
        </>
    )
}