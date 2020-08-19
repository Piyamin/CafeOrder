import React from 'react';
import { StyleSheet, Button, View, TouchableOpacity, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const Promotion = ({ navigation }) => (
  <TouchableOpacity
            style={styles.boxDevice}
            onPress={() => navigation.navigate('DetailScreen')}>
            <View style={{ margin: 10 }}>
              <Text style={styles.textPublic}></Text>
              <Text style={styles.textPublic}>Promotion</Text>
            </View>
  </TouchableOpacity>

);
const styles = StyleSheet.create({
  boxDevice: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: '100%',
    height: 100,
    marginTop: 16,
  },
  // stretch: {
  //   width: 50,
  //   height: 200,
  //   resizeMode: 'stretch',
  // },
});

export default Promotion;