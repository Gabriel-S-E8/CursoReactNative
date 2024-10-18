import React from 'react';
import { Button } from 'react-native';

export default (props) => {
    const executar = () => {
        console.warn('Exec!!!');
    };

    return (
        <>
            <Button title="Executar" onPress={executar} />
            <Button
                title="Executar 2"
                onPress={() => {
                    console.warn('EXEC 2');
                }}
            />
        </>
    );
};
