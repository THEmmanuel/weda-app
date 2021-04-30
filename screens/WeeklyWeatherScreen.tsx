/* eslint-disable prettier/prettier */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import WeekDayCard from '../components/WeekDayCard';
import Colors from '../constants/Colors';

const WeeklyWeatherScreen = () => {
    return (
        <View style={styles.WeeklyWeatherScreen}>
            <View style={styles.TipsContainer}>
                <View style={styles.TipsCard}>
                    <Text style={styles.TipsText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nesciunt deleniti dignissimos dolore. Tenetur voluptate molestias, voluptatum.
                    </Text>
                </View>
            </View>

            <Text>
                Next Week
            </Text>

            <View style={styles.WeekDayContainer}>
                <WeekDayCard />
                <WeekDayCard />
                <WeekDayCard />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    WeeklyWeatherScreen: {
        flex: 1,
        backgroundColor: Colors.uiColors.darkBlue,
    },

    TipsContainer: {
        flex: 1,
    },

    WeekDayContainer: {
        flex: 2,
    },

    TipsCard: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: Colors.uiColors.tipsCardBlue,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
    },

    TipsText: {
        color: Colors.uiColors.textWhite,
        width: '80%',
        fontSize: 15,
    },
});

export default WeeklyWeatherScreen;
