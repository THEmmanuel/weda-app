/* eslint-disable prettier/prettier */
import React from 'react';
import Colors from '../constants/Colors';
import '../assets/ic_cloud_queue_24px.png';

import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';


const WeatherCard = () => {
    return (
        <View style={styles.WeatherCardContainer}>
            <Text style={styles.WeatherDate}>Today, 26 Apr</Text>

            <View style={styles.WeatherCard}>
                <Text style={[styles.WeatherTime, styles.WeatherContent]}>10:00AM</Text>
                <Image
                    style={[styles.WeatherIcon, styles.WeatherContent]}
                    source={require('../assets/ic_cloud_queue_24px.png')}
                />
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
        color: Colors.WeatherColors.textBlue,
        fontWeight: '600',
    },

    WeatherTime: {
        color: Colors.WeatherColors.textBlue,
        fontSize: 12,
    },

    WeatherContent: {
        paddingTop: 5,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 20,
    },

    WeatherCard: {
        marginRight: 15,
        backgroundColor: Colors.WeatherColors.cardBlue,
        borderRadius: 5,
        // width: '40%',
        alignItems: 'center',
    },

    WeatherIcon: {
        paddingRight: 10,
        paddingLeft: 10,
    },

    WeatherTemperature: {
        color: Colors.WeatherColors.textBlue,
        fontSize: 35,
        fontWeight: '700',
    },
});

export default WeatherCard;
