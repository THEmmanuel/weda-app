/* eslint-disable prettier/prettier */
// import axios from 'axios';

import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import TemperatureDisplay from './components/TemperatureDisplay';
// import WeatherCard from './components/WeatherCard';
// import Colors from './constants/Colors';
// import NavigationBar from './components/NavigationBar';
import WeeklyWeatherScreen from './screens/WeeklyWeatherScreen';

import React, {
  // useState,
  // useEffect,
} from 'react';

import {
  // StyleSheet,
  // View,
  // Text,
  // ScrollView,
  // Image,
} from 'react-native';


// const BASE_URL = ' https://api.weatherbit.io/v2.0/current?';
// const API_KEY = 'db0049048589475e9e668c253e679e28';

const App = () => {
  // const [weatherData, setWeatherData] = useState('');
  // const [cityName, setCityName] = useState('');
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setCityName('Ibadan');
  //       const response = await axios(`${BASE_URL}&city=${cityName}&key=${API_KEY}`);
  //       console.log(`${BASE_URL}&city=${cityName}&key=${API_KEY}`);
  //       setWeatherData(response.data.timezone);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [cityName]);


  // const testArray = [1, 2, 3];
  return (
    // <View style={[styles.mainContainer]}>
    //   <View style={[styles.container, styles.navContainer]}>
    //     <NavigationBar/>
    //   </View>

    //   <View style={[styles.container, styles.temperatureContainer]}>
    //     <TemperatureDisplay />
    //   </View>

    //   <ScrollView
    //     style={[styles.container, styles.cardsContainer]}
    //     horizontal={true}>
    //     <WeatherCard />
    //     <WeatherCard />
    //     <WeatherCard />
    //     <WeatherCard />
    //     <WeatherCard />
    //   </ScrollView>
    // </View>

    <WeeklyWeatherScreen/>
  );
};

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     // height: '100%',
//     backgroundColor: Colors.uiColors.bgBlue,
//   },

//   container: {
//     backgroundColor: 'transparent',
//   },

//   navContainer: {
//     flex: 0.2,
//     flexDirection: 'row',
//     // backgroundColor: 'brown',
//   },

//   temperatureContainer: {
//     flex: 1.5,
//     // backgroundColor: 'green',
//   },

//   cardsContainer: {
//     flex: 3,
//     // backgroundColor: 'orange',
//     paddingLeft: 10,
//   },
// });

export default App;

//Change values from % to flex!



//Todos
//Get API calls set-up
//Add mainweather component thingy
//Add the silder thingy?
//Build out the UI, fill it with dummy data
//Routes to weekly view

// setCityName('Ibadan');
      // const response = await axios(`${BASE_URL}&city=${cityName}&key=${API_KEY}`);
      // console.log(`${BASE_URL}&city=${cityName}&key=${API_KEY}`);
      // setWeatherData(response.data.timezone);
