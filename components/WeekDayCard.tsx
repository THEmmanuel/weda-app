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

            <Text style={styles.MinimumTemperature}>
                28
        </Text>

            <Text style={styles.MaximumTemperature}>
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
    },

    WeekDay: {
        color : Colors.uiColors.textWhite,
    },
});

export default WeeklyDayCard;
