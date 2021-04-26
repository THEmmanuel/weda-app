/* eslint-disable prettier/prettier */
// import axios from 'axios';

import React, {
  // useState,
  // useEffect,
} from 'react';

import {
  View,
  Text,
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


  return (
    <View>
      <View>
        <Text>Location Icon</Text>
        <Text>Ciy name</Text>
        <Text>Calendar icon</Text>
      </View>

      <View>
        <Text>Icon? bg?</Text>
        <Text>current weather: eg 25 deg c</Text>
        <Text>components containing the date and all.</Text>
      </View>
    </View>);
};

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
