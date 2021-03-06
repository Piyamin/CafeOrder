// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import * as React from 'react';
import {View, Text, SafeAreaView,StyleSheet,Alert,Button} from 'react-native';
import Slide from '../Components/Slide';
import {ScrollView} from 'react-native-gesture-handler';
import { BottomNavigation } from 'react-native-paper';
import { color } from 'react-native-reanimated';



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
         Cappuccino
        </Text>
        <Text style={{fontSize: 16, textAlign: 'center', color: 'grey'}}>
          คาปูชิโนมีส่วนประกอบหลักคือ เอสเพรสโซ และ นม การชงคาปูชิโนโดยส่วนใหญ่มักมีอัตราส่วนของเอสเพรสโซ 1/3 ส่วน ผสมกับนมสตีม (นมร้อนผ่านไอน้ำ) 1/3 ส่วน และนมตีเป็นโฟมละเอียด 1/3 ส่วนลอยอยู่ด้านบน นอกจากนั้นอ
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
        <Text style={{fontSize: 50, color: 'grey' ,marginBottom:50}}>
          50
        </Text>
   
        <Button title="Add to Cart" color='#5EBA7D' onPress={() => Alert.alert('Add to Cart')}
        style={{
          fontSize: 25,
          textAlign: 'left',
          marginBottom: 50,
          fontFamily: 'Sukhumvit Set',
          

        }}/>
        <Text>
          
        </Text>
        <Button title="Back" color='#2196F3' onPress={() => Alert.alert('Simple Button pressed')}
        style={{
          backgroundColor:'#2196F3',
          fontSize: 25,
          textAlign: 'left',
          marginBottom: 16,
          fontFamily: 'Sukhumvit Set',
          marginTop: 20,

        }}/>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
