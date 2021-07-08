import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';

const { Navigator, Screen } = createStackNavigator();

function AppRoutes() {
    return (
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Tabs" component={Tabs} />
            </Navigator>
    );
}

export default AppRoutes;