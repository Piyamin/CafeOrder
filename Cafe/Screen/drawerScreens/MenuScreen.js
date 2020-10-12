import {StyleSheet, View, Text} from 'react-native';
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
    }
 }
 
   onClickAddCart=()=>{
     console.log(this.state.data.name)
     const todoItems = this.state.data.map((data, index) =>
     // Only do this if items have no stable IDs
     <li key={index}>
      {console.log(data.text)}
     </li>
   );
   const itemcart = {
     food: this.state.data,
     quantity:  1
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
      <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemCode}>{item.code}</Text>
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
