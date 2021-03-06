/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    // Button,
    StyleSheet,
    Button,
} from 'react-native';
import Colors from '../constants/Colors';

const NavigationBar = ({ navigation }) => {
    return (
        <View style={styles.NavigationBar}>
            <Text style={styles.LocationIcon}>Icon</Text>
            <Text style={styles.CityName}>Ibadan</Text>
            <Text
                onPress={() => navigation.navigate('WeeklyWeatherScreen')}
            > Calendar Icon </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    NavigationBar: {
        flexDirection: 'row',
        flex: 1,
    },

    LocationIcon: {
        flex: 1,
    },

    CityName: {
        fontSize: 20,
        flex: 3,
        fontWeight: '400',
        color: Colors.WeatherColors.textBlue,
    },

    Calendar: {
        flex: 1,
    },
});

export default NavigationBar;
