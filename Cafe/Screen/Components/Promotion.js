import React, {Component} from 'react';

import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotion_id: '',
      promotion_image: '',
    };
  }

  componentDidMount() {
    const url = 'http://172.16.28.87/Cafe02/Cafe/database/promotion_api.php';
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataCategories: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
          <View style={{width: width, alignItems: 'center'}}>
            <View style={{height: 50}} />
          </View>

          <View>
            <FlatList
              horizontal={true}
              data={this.state.dataCategories}
              renderItem={({item}) => this._renderItem(item)}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={{height: 50}} />
          </View>
        </View>
      </ScrollView>
    );
  }
  _renderItem(item) {
    // const {navigate} = this.props.navigation;
    return (
      <TouchableOpacity
        style={[styles.divCategorie, {backgroundColor: 'white'}]}
        onPress={() => this.navigation.navigate('MenuScreen')}>
        <Image
          style={{width: 350, height: 200}}
          resizeMode="contain"
          source={{uri: item.promotion_image}}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 0,
    // marginHorizontal: 10,
  },
  divCategorie: {
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
