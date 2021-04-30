/* eslint-disable prettier/prettier */

import React from 'react';
import Colors from '../constants/Colors';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const WeeklyDayCard = () => {
    return (
        <View style={styles.WeeklyDayCard}>
            <Text style={styles.WeekDay}>
                Sunday
        </Text>

            <Text style={[styles.MaximumTemperature, styles.Temperature]}>
                28
        </Text>

            <Text style={[styles.MinimumTemperature, styles.Temperature]}>
                21
        </Text>

            <Text style={styles.WeatherIcon}>
                cloud
        </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    WeeklyDayCard: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },

    WeekDay: {
        color: Colors.WeeklyColors.textBlue,
        fontSize: 16,
        marginRight: 100,
        fontWeight: '500',
    },

    MaximumTemperature: {
        marginRight: 10,
        color: Colors.WeeklyColors.textBlue,
    },

    MinimumTemperature: {
        marginRight: 50,
        color: Colors.WeeklyColors.textLightBlue,
    },

    Temperature: {
        fontSize: 18,
    },

    WeatherIcon: {

    },


});

export default WeeklyDayCard;
