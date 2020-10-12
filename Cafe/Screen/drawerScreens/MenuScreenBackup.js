import {StyleSheet, View, Text,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';

// import icons
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';

import React, { Component } from 'react';

export default class MenuScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order_id :'',
      order_name :'',
      order_image :'',
      detail_price :'',
      data:[]
     }
 }
 componentDidMount() {
  const url = 'http://192.168.43.57/Cafe02/Cafe/database/showMenu_api.php';
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      
        isLoading: false,
        data:responseJson,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
lapsList() {

  return this.state.data.map((data) => {
    return (
      this.setState({
        order_id :data.order_id,
        order_name :'arm',
        order_image :data.order_image,
        detail_price :data.detail_price,
        
      
      })
    )
  });

}
   onClickAddCart=(data)=>{
    //  console.log(this.lapsList())
     console.log(data)
     const itemcart = {
      food: data,
      quantity:  1,
      price: data.price
    }

   AsyncStorage.getItem('cart').then((datacart)=>{
       if (datacart !== null) {
         // We have data!!
         const cart = JSON.parse(datacart)
         cart.push(itemcart)
         AsyncStorage.setItem('cart',JSON.stringify(cart));
       }
       else{
         const cart  = []
         cart.push(itemcart)
         AsyncStorage.setItem('cart',JSON.stringify(cart));
       }
       alert("Add Cart")
     })
     .catch((err)=>{
       alert(err)
     })
 }
 render(){
  return (
      
    <FlatGrid
    itemDimension={130}
    data={this.state.data}
    style={styles.gridView}
    // staticDimension={300}
    // fixed
    spacing={10}
    renderItem={({item}) => (
      <View style={[styles.itemContainer, {backgroundColor: 'gray'}]}>
      <Image
      style={{width: 100, height: 80}}
      source={{uri:item.order_image}}
    />
      <Text style={styles.itemName}>{item.order_name}</Text>
      <Text style={styles.itemCode}>{item.detail_price}</Text>
      <TouchableOpacity 
         onPress={this.onClickAddCart}
          // onPress={()=>this.onClickAddCart(item)}
          style={{
            backgroundColor:'#33c37d',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:"center",
            borderRadius:5,
            padding:4
          }}>
          <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Add Cart</Text>
          <View style={{width:5}} />
          <Icon name="ios-add-circle" size={30} color={"white"} />
      </TouchableOpacity>
      </View>
    )}
  />
  
  );
 }
    
  }





const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
