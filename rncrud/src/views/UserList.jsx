import React, { useContext } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import users from '../data/users';
import { Button, Icon, ListItem } from '@rneui/themed';
import { Avatar } from '@rneui/base';
import  UsersContext  from '../context/UsersContext';

export default (props) => {

    const { state, dispatch } = useContext(UsersContext);

    

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
          {
            text: 'Sim',
            onPress() {
              dispatch({
                type: 'DELETE_USER',
                payload: user,
              })
            },
          },
          {
            text: 'Não',
          },
        ]);
      }
    function getAction(users) {
        return (
            <View style={{ flexDirection: 'row' }}>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', users)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(users)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </View>
        );
    }

    function getUserItem({ item }) {
        return (
            <ListItem
                key={item.id}
                bottomDivider
                onPress={() => props.navigation.navigate('UserForm')}
            >
                <Avatar rounded source={{ uri: item.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Title>{item.email}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Content right>{getAction(item)}</ListItem.Content>
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                keyExtractor={(user) => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    );
};
