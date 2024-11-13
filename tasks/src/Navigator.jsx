import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './screens/Auth';
import TaskList from './screens/TaskList';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer initialRouteName={Auth}>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false, // Desativa o cabeçalho e o ícone do drawer
                }}
            >
                <Drawer.Screen name="Today" options={{ title: 'Hoje' }}>
                    {(props) => (
                        <TaskList {...props} title="Hoje" daysAhead={0} />
                    )}
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
                    {(props) => (
                        <TaskList {...props} title="Mês" daysAhead={30} />
                    )}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const mainRoutes = {
    Login: {
        name: 'Auth',
        screen: Auth,
    },
    Home: {
        name: 'Home',
        screen: MyDrawer,
    },
};

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Login',
});

export default createAppContainer(mainNavigator);
