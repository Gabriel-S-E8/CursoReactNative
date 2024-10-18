import React from 'react';
import { Plataform, StyleSheet, Text, View } from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Iniciando o Jogo!</Text>
            <Text>
                Tamanho da Grade: {params.rows} x {params.cols}
            </Text>
            <Field />
            <Field opened/>
            <Field opened nearMines={1}/>
            <Field opened nearMines={2}/>
            <Field opened nearMines={3}/>
            <Field opened nearMines={6}/>
            <Field mined opened/>
            <Field mined opened exploded/>
            <Field flagged/>
            <Field flagged opened/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
