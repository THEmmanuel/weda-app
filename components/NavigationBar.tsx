/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';
import Colors from '../constants/Colors';

const NavigationBar = () => {
    return (
        <View style={styles.NavigationBar}>
            <Text style={styles.LocationIcon}>Icon</Text>
            <Text style={styles.CityName}>Ibadan</Text>
            <Button
                title="Calendar Icon"
                // style={styles.Calendar}
                onPress={() => console.log('yo!')}>
                {require('../assets/ic_cloud_queue_24px.png')}
            </Button>
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
        color: Colors.uiColors.textBlue,
    },

    Calendar: {
        flex: 1,
    },
});

export default NavigationBar;
