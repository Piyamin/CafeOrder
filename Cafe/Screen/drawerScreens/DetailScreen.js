// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Slide from '../Components/Slide';
import {ScrollView} from 'react-native-gesture-handler';

const DetailScreen = () => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'left',
          marginBottom: 16,
          marginTop: 20,
          fontFamily: 'Sukhumvit Set',
          marginLeft: 20,
        }}>
        รายละเอียด
      </Text>
      <Slide />
      <View style={{flex: 1, padding: 16}}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'left',
            marginBottom: 16,
            fontFamily: 'Sukhumvit Set',
          }}>
          ชื่อเมนู
        </Text>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
          React Native Bottom Navigation
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
          www.aboutreact.com
        </Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'left',
            marginBottom: 16,
            fontFamily: 'Sukhumvit Set',
            marginTop: 20,
          }}>
          Rating
        </Text>
        <Text style={{fontSize: 18, textAlign: 'center', color: 'grey'}}>
          React Native Bottom Navigation
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
          www.aboutreact.com
        </Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'left',
            marginBottom: 16,
            fontFamily: 'Sukhumvit Set',
            marginTop: 20,
          }}>
          Price
        </Text>
      </View>
    </ScrollView>
  );
};
export default DetailScreen;
