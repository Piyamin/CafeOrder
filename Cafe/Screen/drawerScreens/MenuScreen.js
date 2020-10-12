import {StyleSheet, View, Text,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';

// import icons
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import {
  FlatList,
  Dimensions,
  ScrollView,
  TextInput
} from 'react-native';
var {height, width } = Dimensions.get('window');
import Swiper from 'react-native-swiper'


export default class MenuScreen extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      dataFood:[],
    }
  }
 componentDidMount() {
  const url = 'http://172.20.10.6/cafe/showMenu_api.php';
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      
        isLoading: false,
        dataFood:responseJson,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

   onClickAddCart=(data)=>{
    //  console.log(this.lapsList())
     console.log(data)
     const itemcart = {
      food: data,
      quantity:  1,
      detail:data.detail_info,
      price: data.detail_price
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
 _renderItemFood(item){
  
    return(
      <TouchableOpacity style={styles.divFood}>
        <Image
          style={styles.imageFood}
          resizeMode="contain"
          source={{uri:item.order_image}} />
          <View style={{height:((width/2)-20)-90, backgroundColor:'transparent', width:((width/2)-20)-10}} />
          <Text style={{fontWeight:'bold',fontSize:22,textAlign:'center'}}>
            {item.order_name}
          </Text>
          <Text>Descp Food and Details</Text>
          <Text style={{fontSize:20,color:"green"}}>${item.detail_price}</Text>
          <TouchableOpacity
            onPress={()=>this.onClickAddCart(item)}
            style={{
              width:(width/2)-40,
              backgroundColor:'#33c37d',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:"center",
              borderRadius:5,
              padding:4
            }}>
            <Text style={{fontSize:18, color:"white", fontWeight:"bold"}}>Add Cart</Text>
            <View style={{width:10}} />
            <Icon name="ios-add-circle" size={30} color={"white"} />
          </TouchableOpacity>
        </TouchableOpacity>
        
      )
}
 render() {
  return (
    <ScrollView>

      
          <FlatList
            //horizontal={true}
            data={this.state.dataFood}
            numColumns={2}
            renderItem={({ item }) => this._renderItemFood(item)}
            keyExtractor = { (item,index) => index.toString() }
            
          />
          <View style={{height:30}} />

    </ScrollView>
  );
}
}




const styles = StyleSheet.create({
  imageBanner: {
    height:width/2,
    width:width-40,
    borderRadius:10,
    marginHorizontal:20
  },
  divCategorie:{
    backgroundColor:'red',
    margin:5, alignItems:'center',
    borderRadius:10,
    padding:10
  },
  titleCatg:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10
  },
  imageFood:{
    width:((width/2)-20)-10,
    height:((width/2)-20)-30,
    backgroundColor:'transparent',
    position:'absolute',
    top:-45
  },
  divFood:{
    width:(width/2)-20,
    padding:10,
    borderRadius:10,
    marginTop:55,
    marginBottom:5,
    marginLeft:10,
    alignItems:'center',
    elevation:8,
    shadowOpacity:0.3,
    shadowRadius:50,
    backgroundColor:'white',
  }
});