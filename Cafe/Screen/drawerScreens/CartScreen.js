// /* This is an Login Registration example from https://aboutreact.com/ */
// /* https://aboutreact.com/react-native-login-and-signup/ */

// //Import React
// import React from 'react';

// //Import all required component
// import { View, Text } from 'react-native';
// import Footer from '../Components/Footer'
// import ItemsContainer from '../Components/ItemsContainer'
// import { Component } from 'react';
// import BasketComponent from '../Components/BasketComponent'




// export default class CartScreen extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
    
//         <ItemsContainer />
//         <BasketComponent />
//         <Footer />
//       </View>
      
//     );
//   }
// }
import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Dimensions ,ScrollView} from 'react-native';
var { width } = Dimensions.get("window")
// import icons
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
export default class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCart:[],
    };
 }
 onChangeQual(i,type)
  {
    const dataCar = this.state.dataCart
    let cantd = dataCar[i].quantity;

    if (type) {
     cantd = cantd + 1
     dataCar[i].quantity = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd>=2){
     cantd = cantd - 1
     dataCar[i].quantity = cantd
     this.setState({dataCart:dataCar})
    }
    else if (type==false&&cantd==1){
     dataCar.splice(i,1)
     this.setState({dataCart:dataCar})
    } 
  }
 componentDidMount()
 {
   console.log(this.dataCart)
   AsyncStorage.getItem('cart').then((cart)=>{
     if (cart !== null) {
       // We have data!!
       const cartfood = JSON.parse(cart)
       console.log(cartfood)
       this.setState({dataCart:cartfood})
     }
   })
   .catch((err)=>{
     alert(err)
   })
 }
 render() {
  return (
    <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
       <View style={{height:20}} />
       <Text style={{fontSize:32,fontWeight:"bold",color:"#33c37d"}}>Cart food</Text>
       <View style={{height:10}} />

       <View style={{flex:1}}>

         <ScrollView>

           {
             this.state.dataCart.map((item,i)=>{
               return(
                 <View style={{width:width-20,margin:10,backgroundColor:'transparent', flexDirection:'row', borderBottomWidth:2, borderColor:"#cccccc", paddingBottom:10}}>
                   <Image resizeMode={"contain"} style={{width:width/3,height:width/3}} source={{uri: "http://tutofox.com/foodapp/food/pizza/pizza-1.png"}} />
                   <View style={{flex:1, backgroundColor:'trangraysparent', padding:10, justifyContent:"space-between"}}>
                     <View>
                    {this.state.item.map((item,i)=>{
                      <Text style={{fontWeight:"bold", fontSize:20}} key={i}>{console.log(item.name)}</Text>{}
                    })}
                       <Text style={{fontWeight:"bold", fontSize:20}} key>{item.name}</Text>{}
                       <Text>Lorem Ipsum de food</Text>
                     </View>
                     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <Text style={{fontWeight:'bold',color:"#33c37d",fontSize:20}}>${'item.price*'}</Text>
                       <View style={{flexDirection:'row', alignItems:'center'}}>
                         <TouchableOpacity onPress={()=>this.onChangeQual(i,false)}>
                           <Icon name="ios-remove-circle" size={35} color={"#33c37d"} />
                         </TouchableOpacity>
                         <Text style={{paddingHorizontal:8, fontWeight:'bold', fontSize:18}}>{item.quantity}</Text>
                         <TouchableOpacity onPress={()=>this.onChangeQual(i,true)}>
                           <Icon name="ios-add-circle" size={35} color={"#33c37d"} />
                         </TouchableOpacity>
                       </View>
                     </View>
                   </View>
                 </View>
               )
             })
           }

           <View style={{height:20}} />

           <TouchableOpacity style={{
               backgroundColor:"#33c37d",
               width:width-40,
               alignItems:'center',
               padding:10,
               borderRadius:5,
               margin:20
             }}>
             <Text style={{
                 fontSize:24,
                 fontWeight:"bold",
                 color:'white'
               }}>
               CHECKOUT
             </Text>
           </TouchableOpacity>

           <View style={{height:20}} />
         </ScrollView>

       </View>

    </View>
  );
}
  }