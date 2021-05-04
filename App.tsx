/* eslint-disable prettier/prettier */
// import axios from 'axios';

import 'react-native-gesture-handler';
import Colors from './constants/Colors';
import { NavigationContainer } from '@react-navigation/native';
// import WeeklyWeatherScreen from './screens/WeeklyWeatherScreen';
import HomeWeatherScreen from './screens/HomeWeatherScreen';
import WeeklyWeatherScreen from './screens/WeeklyWeatherScreen';
import { createStackNavigator } from '@react-navigation/stack';

import React, { ReactNode, useState, useEffect } from 'react';

import {
  StyleSheet,
  // View,
  // Text,
  // Image,
} from 'react-native';


//Global Variables.
const BASE_URL = 'https://api.weatherbit.io/v2.0/current?';
const API_KEY = 'db0049048589475e9e668c253e679e28';
const Stack = createStackNavigator();

const App: () => ReactNode = () => {
  //API Calls.
  //Data trickles down to components via props. Then get's managed via the component's states?
  //UseEffect runs once on startup... hence the empty arrray passed as a second argument.

  const [weatherData, setWeatherData] = useState('');
  const [cityName, setCityName] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        setCityName('Ibadan');
        const response = await axios(`${BASE_URL}&city=${cityName}&key=${API_KEY}`);
        console.log(`${BASE_URL}&city=${cityName}&key=${API_KEY}`);
        setWeatherData(response.data.timezone);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [cityName]);

  const getCityHandler = () => {
    
  };
  //API calls! dosen't work... yet.
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <StackScreens /> */}
        {/* <HomeWeatherScreen /> */}
        <Stack.Screen name="Home" component={HomeWeatherScreen} />
        <Stack.Screen name="Weekly Forecast" component={WeeklyWeatherScreen} />
      </Stack.Navigator>
      {/* <WeeklyWeatherScreen /> */}
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: Colors.WeatherColors.bgBlue,
  },
});

// const StackScreens = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeWeatherScreen}
//           options={{ title: 'Daily Weather' }}
//         />

//         <Stack.Screen
//           name="Week forecast"
//           component={WeeklyWeatherScreen}
//           options={{ title: 'Week Forecast' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };



export default App;


// This file should only contain the routes yo have set up and the two activities.
// <Home/> and <WeeklyWeatherScreen/>

// Make API calls here and have the data trickle down to the componens through props.
