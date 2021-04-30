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

            <Text style={styles.MaximumTemperature}>
                28
        </Text>

            <Text style={styles.MinimumTemperature}>
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
    },

    MaximumTemperature: {
        fontSize: 18,
        opacity: 60,
        marginRight: 10,
        color: Colors.WeeklyColors.textBlue,
    },

    MinimumTemperature: {
        fontSize: 18,
        marginRight: 50,
        color: Colors.WeeklyColors.textBlue,
    },

    WeatherIcon: {

    },


});

export default WeeklyDayCard;
