import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default function MinMax(param){
    console.warn(param);
    return (
        <Text style={estilo.fontG}>
            O Valor {param.max} é maior que o {param.min}
        </Text>
    )
}