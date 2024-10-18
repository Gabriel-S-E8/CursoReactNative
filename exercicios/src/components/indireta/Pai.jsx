import React, {useState} from 'react'
import Filho from './Filho'
import { Text } from 'react-native'
import estilo from '../estilo'

export default props => {
    const [num, setNum] = useState(0)

    const exibirValor = (numero) =>  {
        setNum(numero)
    }

    return (
        <> 
            <Text style={estilo.fontG}>
                {num}
            </Text>   
            <Filho 
                min={1}
                max={88}
                funcao={exibirValor}
            />
        </>
    )
}