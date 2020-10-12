import {StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FlatGrid} from 'react-native-super-grid';

// import icons
import Icon from 'react-native-vector-icons/Ionicons';

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
 componentDidMount() {
  const url = 'http://172.16.240.171/Cafe02/Cafe/database/showMenu_api.php';
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
   render() {
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
          {/* <ImageBackground source={item.order_image} style={styles.image}></ImageBackground> */}
          <Text style={styles.itemName}>{item.order_name}</Text>
          <Text style={styles.itemCode}>{item.detail_price}</Text>
          <TouchableOpacity 
          //  onPress={addElement}
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
