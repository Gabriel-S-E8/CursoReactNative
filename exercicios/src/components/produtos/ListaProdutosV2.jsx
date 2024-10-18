import React from 'react';
import { Text, View, Button, FlatList } from 'react-native';
import estilo from '../estilo';

import produtos from './produtos';
export default (props) => {
    return (
        <>
            <Text style={estilo.fontG}>
                Lista de Produtos V2
            </Text>
            <FlatList style={estilo.fontG}
                data={produtos}
                keyExtractor={(p) => p.id}
                renderItem={({item: p} )=>{
                    return <Text>{p.id} - {p.nome} Vale: R${p.preco}</Text>
                }}
            />
        </>
    );
};
