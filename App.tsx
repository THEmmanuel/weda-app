/* eslint-disable prettier/prettier */
// import axios from 'axios';

import TemperatureDisplay from './components/TemperatureDisplay';
import WeatherCard from './components/WeatherCard';

import React, {
  // useState,
  // useEffect,
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
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
    <View>
      <View style={[styles.container, styles.navContainer]}>
        <Text>location icon?</Text>
        <Text>city_name?</Text>
        <Text>cakendar</Text>
      </View>

      <View style={[styles.container, styles.temperatureContainer]}>
        <TemperatureDisplay />
      </View>

      <ScrollView
        style={[styles.container, styles.cardsContainer]}
        horizontal={true}>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  temperatureContainer: {
    height: '60%',
    width: '100%',
    backgroundColor: 'orange',
  },

  cardsContainer: {
    height: '35%',
    backgroundColor: 'yellow',
  },

  navContainer: {
    height: '5%',
    backgroundColor: 'blue',
  },
});

export default App;


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
