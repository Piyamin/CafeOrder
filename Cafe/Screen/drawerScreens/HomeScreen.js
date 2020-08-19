/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';
import Snap from '../Components/Snap';
//Import all required component
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 23,
          marginBottom: 20,
          marginLeft: 20,
          textAlign: 'left',
        }}>
        Promotion
      </Text>
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Snap />
      </View>
      <Text
        style={{
          fontSize: 23,
          marginBottom: 20,
          textAlign: 'left',
          marginTop: 20,
        }}>
        Popular
      </Text>
    </ScrollView>
  );
};
export default HomeScreen;
