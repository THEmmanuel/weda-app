/* eslint-disable prettier/prettier */
import React from 'react';
import NavigationContainer, { StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const screenStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = "Home"
                    component = {App}
                    options = {{title: 'Daily Weather'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

