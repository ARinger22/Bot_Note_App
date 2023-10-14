import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerNavigator from './components/DrawerNavigator';
import ChatState from './context/ChatState';
const stackNavigation = createNativeStackNavigator()

const mainNavigator = () => {
    return (
        <ChatState >
            <NavigationContainer >
                <stackNavigation.Navigator >
                    <stackNavigation.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
                    {/* <stackNavigation.Screen name='Flatlist' component={Flatlist} /> */}
                </stackNavigation.Navigator>
            </NavigationContainer>
        </ChatState>
    );
};

export default mainNavigator;
