/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


const WeatherCard = () => {
    return (
        <View style={styles.WeatherCardContainer}>
            <Text>date?</Text>

            <View style={styles.WeatherCard}>
                <Text>temperature?</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    WeatherCardContainer: {
        width: '35%',
        height: '75%',
        backgroundColor: 'red',
        marginRight: '40px',
    },

    WeatherCard: {
        height: '60%',
    },

});

export default WeatherCard;
