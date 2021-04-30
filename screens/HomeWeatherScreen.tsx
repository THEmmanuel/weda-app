/* eslint-disable prettier/prettier */

import TemperatureDisplay from './../components/TemperatureDisplay';
import WeatherCard from './../components/WeatherCard';
import Colors from './../constants/Colors';
// import NavigationBar from './../components/NavigationBar';

import React, {
    // useState,
    // useEffect,
} from 'react';

import {
    StyleSheet,
    View,
    //   Text,
    ScrollView,
    //   Image,
} from 'react-native';


const HomeWeatherScreen = () => {
    return (
        <View style={[styles.mainContainer]}>

            <View style={[styles.container, styles.temperatureContainer]}>
                <TemperatureDisplay />
            </View>

            <ScrollView
                style={[styles.container, styles.cardsContainer]}
                horizontal={true}>
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
                <WeatherCard />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: '100%',
        backgroundColor: Colors.WeatherColors.bgBlue,
    },

    container: {
        backgroundColor: 'transparent',
    },

    temperatureContainer: {
        flex: 1.5,
        backgroundColor: Colors.WeatherColors.bgBlue,
    },

    cardsContainer: {
        flex: 3,
        backgroundColor: Colors.WeatherColors.bgBlue,
        paddingLeft: 10,
    },
});

export default HomeWeatherScreen;