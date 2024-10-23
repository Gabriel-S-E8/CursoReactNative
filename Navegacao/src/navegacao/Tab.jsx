import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import TelaD from '../views/TelaD';
import Icon from 'react-native-vector-icons/Ionicons'; // ou outra biblioteca de ícones

const Tab = createBottomTabNavigator();

export default (props) => (
    <Tab.Navigator initialRouteName='TelaB'
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "blue",
            tabBarLabelStyle: { fontSize: 30 },
            tabBarShowLabel: false,  // Oculta os nomes/labels das abas
            tabBarIcon: ({ color, size }) => {
                let iconName;

                // Definindo o ícone para cada rota (TelaA, TelaB, TelaC)
                if (route.name === 'TelaA') {
                    iconName = 'home-outline'; // ícone de home para TelaA
                } else if (route.name === 'TelaB') {
                    iconName = 'person-outline'; // ícone de perfil para TelaB
                } else if (route.name === 'TelaC') {
                    iconName = 'settings-outline'; // ícone de configurações para TelaC
                }else if (route.name === 'TelaD') {
                    iconName = 'menu-outline'; // ícone de menu para TelaD
                }

                // Retorna o ícone usando o nome definido
                return <Icon name={iconName} size={size} color={color} />;
            }
        })}
    >
        <Tab.Screen name='TelaA' component={TelaA} options={{ title: 'Home' }} />
        <Tab.Screen name='TelaB' component={TelaB} options={{ title: 'Perfil' }} />
        <Tab.Screen name='TelaC' component={TelaC} options={{ title: 'Settings' }} />
        <Tab.Screen name='TelaD' component={TelaD} options={{ title: 'Drawer' }} />
    </Tab.Navigator>
);
