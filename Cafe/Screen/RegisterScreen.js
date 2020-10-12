import React, { Component } from 'react';
import { ImageBackground,
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Button,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  Image} from 'react-native';
// import Loader from './Components/loader';
export default class MainProject extends Component {
constructor(props) {
    super(props)
    this.state = {
      TextInputName: '',
      TextInputNicename: '',
      TextInputSex: '',
      TextInputTelephone: '',
      TextInputEmail: '',
      TextInputProfession: '',
      TextInputPassword: ''
    }
  }
  InsertDataToServer = () =>{
    const { TextInputName }  = this.state ;
    const { TextInputEmail }  = this.state ;
    const { TextInputPassword }  = this.state ;


fetch('http://192.168.43.57/Cafe02/Cafe/database/registration_api.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    user_name: TextInputName,
    user_email: TextInputEmail,
    user_password: TextInputPassword,
  })
}).then((response) => response.json())
      .then((responseJson) => {
// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      }).catch((error) => {
        console.error(error);
      });

 
  }
  render() {
    return (
      <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
        <ScrollView>
        <View style={{marginTop: 100}}>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../Image/logo.png')}
                  style={{
                    width: 500,
                    height: 200,
                    //resizeMode: 'contain',
                    margin: 1,
                  }}
                />
            </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  placeholder="Enter username"
                  placeholderTextColor="#F6F6F7"
                  onChangeText={TextInputName => this.setState({TextInputName})}
                  underlineColorAndroid='transparent'
                  onSubmitEditing={Keyboard.dismiss}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  placeholder="Enter email"
                  placeholderTextColor="#F6F6F7"
                  onChangeText={TextInputEmail => this.setState({TextInputEmail})}
                  underlineColorAndroid='transparent'
                  style={styles.inputStyle}
                  onSubmitEditing={Keyboard.dismiss}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  placeholder="Enter password"
                  placeholderTextColor="#F6F6F7"
                  onChangeText={TextInputPassword => this.setState({TextInputPassword})}
                  underlineColorAndroid='transparent'
                  style={styles.inputStyle}
                  onSubmitEditing={Keyboard.dismiss}
                />
              </View>
              <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={this.InsertDataToServer}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        
        {/* <View style={styles.buttonStyle,buttonTextStyle} >
        <Button title="Confirm" onPress={this.InsertDataToServer} />
      </View> */}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#350D04',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#542e0f',
    borderWidth: 0,
    color: '#ffffff',
    borderColor: '#CD853F',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#ffffff',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10
    },
    TextInputStyleClass: {
    textAlign: 'center',
    // Set border Hex Color Code Here.
     borderColor: '#5e3881',
    // Set border Radius.
     //borderRadius: 10 ,
    }
});
AppRegistry.registerComponent('MainProject', () => MainProject);