/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import { View, Text } from 'react-native';
import Footer from '../Components/Footer'
import ItemsContainer from '../Components/ItemsContainer'
import { Component } from 'react';
import BasketComponent from '../Components/BasketComponent'




export default class CartScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
    
        <ItemsContainer />
        <BasketComponent />
        <Footer />
      </View>
      
    );
  }
}