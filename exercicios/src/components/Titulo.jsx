import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo";


export default props => {
    return (
        <>
            <Text style={estilo.fontG}>{props.principal}</Text>

            <Text>{props.secundario}</Text>
        </>
    )
}