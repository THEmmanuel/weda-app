/* eslint-disable prettier/prettier */
import React from 'react';
import Colors from '../constants/Colors';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


const WeatherCard = () => {
    return (
        <View style={styles.WeatherCardContainer}>
            <Text>Today, 26 Apr</Text>

            <View style={styles.WeatherCard}>
                <Text style={[styles.WeatherTime, styles.WeatherContent]}>10:00AM</Text>
                <Text style={styles.WeatherIcon}>Cloud image</Text>
                <Text style={styles.WeatherTemperature}>28</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    WeatherCardContainer: {
        width: '32%',
        // height: '85%',
    },

    WeatherContent: {

    },

    WeatherCard: {
        // height: '80',
        marginRight: 15,
        backgroundColor: Colors.uiColors.cardBlue,
        borderRadius: 5,
        alignItems: 'center',
    },

    WeatherTime: {

    },

    WeatherIcon: {

    },

    WeatherTemperature: {
        color: Colors.uiColors.textBlue,
        fontSize: 35,
        fontWeight: '600',
    },
});

export default WeatherCard;
