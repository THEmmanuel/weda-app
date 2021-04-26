/* eslint-disable prettier/prettier */
import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    // Image,
} from 'react-native';


const TemperatureDisplay = () => {
    return (
        <View style={styles.temperatureDisplay}>
            <Text> cloudy </Text>
            <Text>28c</Text>

            <View>
                <View>
                    {/* <Image></Image> */}
                    <Text></Text>
                </View>

                <View>
                    {/* <Image></Image> */}
                    <Text></Text>
                </View>
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    temperatureDisplay: {
        backgroundColor: 'transparent',
        flex: 1,
    },
});

export default TemperatureDisplay;
