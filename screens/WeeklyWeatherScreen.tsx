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


            <View style={styles.WeekDayContainer}>

                <Text style = {styles.WeekHeading}>
                    Next Week
                </Text>

                <WeekDayCard />
                <WeekDayCard />
                <WeekDayCard />
                <WeekDayCard />
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
        backgroundColor: Colors.WeeklyColors.bgBlue,
    },

    TipsContainer: {
        flex: 1,
    },

    WeekDayContainer: {
        flex: 2,
        padding: 25,
    },

    TipsCard: {
        width: '95%',
        alignSelf: 'center',
        backgroundColor: Colors.WeeklyColors.cardBlue,
        marginTop: 25,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 5,
    },

    TipsText: {
        color: Colors.WeeklyColors.textBlue,
        alignSelf: 'center',
        width: '80%',
        fontSize: 15,
    },

    WeekHeading : {
        paddingBottom: 30,
        fontSize: 20,
        color: Colors.WeatherColors.textWhite,
        fontWeight: '600',
    },
});

export default WeeklyWeatherScreen;
