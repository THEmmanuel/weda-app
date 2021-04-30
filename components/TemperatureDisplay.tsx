/* eslint-disable prettier/prettier */
import React from 'react';
import Colors from '../constants/Colors';

import {
    StyleSheet,
    Text,
    View,
    // Image,
} from 'react-native';


const TemperatureDisplay = () => {
    return (
        <View style={styles.temperatureDisplay}>
            <View style={styles.container}>
                <Text style={styles.WeatherType}> Cloudy </Text>
                <Text style={styles.WeatherTemperature}>28</Text>

                <View style={styles.WeatherInformationContainer}>
                    <View style={styles.WeatherInformation}>
                        {/* <Image></Image> */}
                        <Text style={styles.WindSpeed}>0km/h</Text>
                    </View>

                    <View style={styles.WeatherInformation}>
                        {/* <Image></Image> */}
                        <Text style={styles.WeatherPrecipitation}>47%</Text>
                    </View>
                </View>

            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    temperatureDisplay: {
        backgroundColor: 'transparent',
        flex: 1,
        color: Colors.uiColors.textBlue,
        // alignContent: 'center',
    },

    container: {
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: '25%',
    },

    WeatherType: {
        fontSize: 15,
        fontWeight: '500',
        paddingBottom: 10,
        color: Colors.uiColors.textBlue,
    },
    WeatherTemperature: {
        fontSize: 80,
        fontWeight: '600',
        color: Colors.uiColors.textBlue,
    },

    WeatherInformationContainer: {
        flexDirection: 'row',
        color: Colors.uiColors.textBlue,
    },

    WeatherInformation: {
        margin: 10,
        color: Colors.uiColors.darkBlue,
    },

    WindSpeed: {

    },

    WeatherPrecipitation: {

    },
});

export default TemperatureDisplay;
