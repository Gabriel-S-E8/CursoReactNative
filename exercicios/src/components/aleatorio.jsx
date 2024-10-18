import { Text, View } from "react-native";
import estilo from "./estilo";


export default function aleatorio({min, max}){
    const array = Array.from({ length: 88 }, (_, i) => i + 1);
    const radom = array[Math.floor(Math.random() * array.length)]; // uso 1 array e pego 1 numero aleatorio dentro dele 
    const delta = max - min + 1; //Defino 1 tamnho "espaço entre 2 valores" 
    const aleatorio = parseInt(Math.random() * delta) + min; // e pego 1 valor aleatorio refernete a esse tamanho
    return (
        <View>
            <Text style={estilo.fontG}>Oi</Text>
            <Text style={estilo.fontG}>Esse é um numero aletorio: {radom}</Text>
            <Text style={estilo.fontG}>Esse é um numero aletorio: {aleatorio}</Text>
        </View>
        
    )
}