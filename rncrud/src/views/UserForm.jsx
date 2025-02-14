import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import UsersContext from "../context/UsersContext";

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {});
    const {dispatch} = 	useContext(UsersContext);

    return (
        <View style={styles.form}>
            <Text>Name</Text>
            <TextInput  
                style={styles.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Imforme o nome"
                value={user.name}
            />
            <Text>E-mail</Text>
            <TextInput  
                style={styles.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Imforme o E-Mail"
                value={user.email}
            />
            <Text>Url do Avatar</Text>
            <TextInput  
                style={styles.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Imforme a Url do Avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={()=> {
                    dispatch({
                        type: user.id ? 'UPDATE_USER' : 'ADD_USER',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    form:{
        padding: 12,
    },
    input: {
        height: 40,
        borderWidth: 2,
        borderColor: '#ddd',
        marginBottom: 10,
        borderRadius: 6,
    }
});