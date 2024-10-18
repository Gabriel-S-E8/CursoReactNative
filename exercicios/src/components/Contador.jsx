import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import estilo from './estilo';

export default (props) => {
    const [cont, setCont] = React.useState(0);

    return (
        <>
            <Text>O seu contador está em: {cont}</Text>
            <Button
                title="+"
                onPress={() => {
                    setCont(cont + 1);
                }}
            />
            <Button
                title="-" 
                onPress={() => {
                    if (cont > 0) {
                        setCont(cont - 1);
                    }
                }}
            />
        </>
    );
};
