/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';
import Promotion from '../Components/Promotion';
import Popular from '../Components/Popular';
//Import all required component
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Catagory from '../Components/Catagory';

const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 23,
          marginTop: 10,
          // marginBottom: 0,
          marginLeft: 20,
          textAlign: 'left',
        }}>
        Promotion
      </Text>
      <Promotion />
      <Text
        style={{
          fontSize: 23,
          // marginBottom: 5,
          textAlign: 'left',
          marginLeft: 20,
          // marginTop: 20,
        }}>
        Catagory
      </Text>
      <Catagory />
      <Text
        style={{
          fontSize: 23,
          // marginBottom: 20,
          textAlign: 'left',
          marginLeft: 20,
          marginTop: 10,
        }}>
        Popular
      </Text>
      <Popular />
    </ScrollView>
  );
};
export default HomeScreen;
