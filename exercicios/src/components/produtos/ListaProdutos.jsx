import React from 'react';
import { Text, View, Button } from 'react-native';
import estilo from '../estilo';

import produtos from './produtos';
export default (props) => {
    const lista = () => {
        return produtos.map((p) => {
            return (
                <Text key={p.id}>
                    {p.id} - {p.nome} Vale R$: {p.preco}
                </Text>
            );
        });
    };

    return (
        <>
            <Text style={estilo.fontG}>Lista de Produtos</Text>
            {lista()}
        </>
    );
};
