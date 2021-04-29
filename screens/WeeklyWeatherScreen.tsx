/* eslint-disable prettier/prettier */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import WeekDayCard from '../components/WeekDayCard';


const WeeklyWeatherScreen = () => {
    return (
        <View>

            <View>
                <Text>
                    Next Week
            </Text>
                <WeekDayCard />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default WeeklyWeatherScreen;
