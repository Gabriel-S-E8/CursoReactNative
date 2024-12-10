import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Auth from './screens/Auth';
import TaskList from './screens/TaskList';

import AuthOrApp from './screens/AuthOrApp';
import Menu from './screens/Menu';
import commonStyles from './commonStyles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const menuConfig = {
    drawerLabelStyle: {
        fontFamily: commonStyles.fontFamily,
        fontWeight: 'normal',
        fontSize: 20,
    },
    drawerActiveTintColor: '#080',
};

const DrawerNavigator = ({ route }) => {
    const { email, name } = route.params || {};

    return (
        <Drawer.Navigator
            screenOptions={{
                ...menuConfig,
                headerShown: false, // Desativa o cabeçalho e o ícone do drawer
            }}
            drawerContent={(props) => (
                <Menu {...props} email={email} name={name} />
            )}
        >
            <Drawer.Screen name="Today" options={{ title: 'Hoje' }}>
                {(props) => <TaskList {...props} title="Hoje" daysAhead={0} />}
            </Drawer.Screen>
            <Drawer.Screen name="Tomorrow" options={{ title: 'Amanhã' }}>
                {(props) => (
                    <TaskList {...props} title="Amanhã" daysAhead={1} />
                )}
            </Drawer.Screen>
            <Drawer.Screen name="Week" options={{ title: 'Semana' }}>
                {(props) => (
                    <TaskList {...props} title="Semana" daysAhead={7} />
                )}
            </Drawer.Screen>
            <Drawer.Screen name="Month" options={{ title: 'Mês' }}>
                {(props) => <TaskList {...props} title="Mês" daysAhead={30} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="AuthOrApp">
                <Stack.Screen
                    name="AuthOrApp"
                    component={AuthOrApp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Auth}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
