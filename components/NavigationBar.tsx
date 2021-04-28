/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NavigationBar = () => {
    return (
        <View style= {styles.NavigationBar}>
            <Text style = {styles.LocationIcon}>Icon</Text>
            <Text style = {styles.CityName}>Ibadan</Text>
            <Text style = {styles.Calendar}>Icon</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    NavigationBar : {
        flexDirection: 'row',
        flex: 1,
    },

    LocationIcon: {
        flex: 1,
    },

    CityName : {
        flex: 3,
    },

    Calendar : {
        flex: 1,
    },
});

export default NavigationBar;
