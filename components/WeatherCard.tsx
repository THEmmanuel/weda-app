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
            <Text style={styles.WeatherDate}>Today, 26 Apr</Text>

            <View style={styles.WeatherCard}>
                <Text style={[styles.WeatherTime, styles.WeatherContent]}>10:00AM</Text>
                <Text style={[styles.WeatherIcon, styles.WeatherContent]}>Cloud image</Text>
                <Text style={[styles.WeatherTemperature, styles.WeatherContent]}>28</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    WeatherCardContainer: {
        // paddingLeft: 10,
        // width: '22%',
    },

    WeatherDate: {
        paddingBottom: 25,
        fontSize: 15,
        color: Colors.uiColors.textBlue,
        fontWeight: '600',
    },

    WeatherTime: {
        color: Colors.uiColors.textBlue,
        fontSize: 12,
    },

    WeatherContent: {
        paddingTop: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
    },

    WeatherCard: {
        marginRight: 15,
        backgroundColor: Colors.uiColors.cardBlue,
        borderRadius: 5,
        alignItems: 'center',
    },

    WeatherIcon: {

    },

    WeatherTemperature: {
        color: Colors.uiColors.textBlue,
        fontSize: 35,
        fontWeight: '700',
    },
});

export default WeatherCard;
