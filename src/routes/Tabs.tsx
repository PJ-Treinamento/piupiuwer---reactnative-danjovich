import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Feed from '../pages/Feed';
import Profiles from '../pages/Profiles';
import MyProfile from '../pages/MyProfile';
import { colors } from '../assets/styles';

const { Navigator, Screen } = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 16,
                    shadowOpacity: 0,
                    height: 64
                },
                tabStyle: {
                    // flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 30,
                    height: 30
                },
                labelStyle: {
                    fontFamily: 'Lato_400Regular',
                    fontSize: 16
                },
                inactiveBackgroundColor: colors.background,
                activeBackgroundColor: colors.lighterGray,
                inactiveTintColor: colors.gray,
                activeTintColor: colors.blue
            }}
        >
            <Screen 
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Seu Feed',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="musical-notes" size={size} color={focused ? colors.blue : color} />
                        );
                    }
                }}
            />
            <Screen
                name="Profiles"
                component={Profiles}
                options={{
                    tabBarLabel: 'Perfis',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="people" size={size} color={focused ? colors.blue : color} />
                        );
                    }
                }}
            />
            <Screen
                name="My Profile"
                component={MyProfile}
                options={{
                    tabBarLabel: 'Meu perfil',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="person" size={size} color={focused ? colors.blue : color} />
                        );
                    }
                }}
            />
        </Navigator>
    );
}

export default Tabs;