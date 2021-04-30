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
        flexDirection: 'row',
        marginBottom: 10,
    },

    WeekDay: {
        color: Colors.uiColors.textWhite,
        fontSize: 16,
    },

    MaximumTemperature: {
        fontSize: 18,
        opacity: 60,
        color: Colors.uiColors.textWhite,
    },

    MinimumTemperature: {
        fontSize: 18,
        color: Colors.uiColors.textWhite,
    },

    WeatherIcon: {
        
    },


});

export default WeeklyDayCard;
