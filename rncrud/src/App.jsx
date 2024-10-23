import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from '@rneui/themed';


const Stack = createNativeStackNavigator();

export default (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screeenOptions}
            >
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({navigation}) => {
                        return {
                            title: 'Lista de Usuarios',
                            headerRight: () => (
                                <Button
                                    onPress={() => navigation.navigate('UserForm')}
                                    type="clear"
                                    icon={
                                        <Icon
                                            name="add"
                                            size={25}
                                            color="white"
                                        />
                                    }
                                />
                            ),
                        };
                    }}
                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{ title: 'Formulario de Usuarios' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const screeenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
