import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export  function Comp1() {
    return <Text style={estilo.fontG}>Componente #Oficial</Text>;
} 

export  function Comp2() {
    return <Text style={estilo.fontG}>Componente #02</Text>;
} 

export  function Comp3() {
    return <Text style={estilo.fontG}>Componente #03</Text>;
}