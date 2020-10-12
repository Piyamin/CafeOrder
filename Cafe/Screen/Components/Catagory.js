import React, {Component} from 'react';
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type_id: '',
      type_name: '',
      type_image: '',
    };
  }
  componentDidMount() {
    const url = 'http://192.168.43.57/Cafe02/Cafe/database/type_api.php';
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
            <View style={{height: 10}} />
              <View>
                <FlatList
                  horizontal={true}
                  data={this.state.dataCategories}
                  renderItem={({item}) => this._renderItem(item)}
                  keyExtractor={(item, index) => index.toString()}
                />
            <View style={{height: 20}} />
              </View>
            </View>
        </View>
      </ScrollView>
    );
  }
  _renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.divCategorie, {backgroundColor: 'white'}]}
        onPress={() =>
          this.props.navigation.navigate('CatagoryScreen')
        }>
        <Image
          style={{width: 100, height: 80}}
          resizeMode="contain"
          source={{uri:item.type_image}}
        />
        <Text style={{fontWeight: 'bold', fontSize: 22}}>{item.type_name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 0,
    marginHorizontal: 20,
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
