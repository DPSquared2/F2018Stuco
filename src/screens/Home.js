/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header';
import {SafeAreaView} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ListItem} from 'react-native-elements';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {

  state = {
    data: []
  }

  componentWillMount() {
    this.populateData()
  }

  populateData() {
<<<<<<< HEAD
    fetch('https:api//api.myjson.com/bins/bphek')
    .then((response) => response.json())
    .then((responseJson) => {
      alert('respJson')
      this.setState({data: responseJson.Birthdays})
      return responseJson
    })
    .catch(error) => {
      console.log(error);
    }
=======
    fetch('https://api.myjson.com/bins/bphek')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('respJson', responseJson);
      this.setState({data: responseJson.Birthdays})
      return responseJson.Birthdays
    })
    .catch((error) => {
      console.log(error);
    })
>>>>>>> 5190a367ad7c892590b974486146c3438a9cf3bf
  }

  _renderItem = ({item}) => (
    <ListItem
      onPress={() => this.props.navigation.navigate('Screen2', {item})}
      title={item.name}
      subtitle={`Age: ${item.age}`}
      subtitleStyle={{fontStyle:'italic', fontWeight:'300'}}
      leftIcon = {item.havePic == 0 && <Icon name='person' size = {30} color='red'/>}
      avatar = {item.havePic == 1 && <Image style={{width:30, height:30, borderRadius: 15}} source={{uri: 'https://images.vice.com/vice/images/articles/meta/2016/11/03/kazakhstan-borat-1478184247.jpg?crop=1xw%3A0.8562062937062938xh%3Bcenter%2Ccenter&resize=1050%3A*&output-quality=55'}}/>}
    />
  )

  _keyExtractor = (item, index) => item.id;


  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header title='Home'/>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            navigation={this.props.navigation}
            keyExtractor={this._keyExtractor}
          />

        </View>
      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
    backgroundColor:'white'
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  secondContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
  },
  thirdContainer:{
    flex:2,
    backgroundColor:'green'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bottomText:{
    fontSize: 30,
    color:'red'
  },


  CellContainer:{
    flex:1,
    flexDirection:'row',
    padding: 20,
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:'red'
  },
  CellText:{
    // fontSize:20,
    alignItems:'center',
    justifyContent:'center',
    fontStyle: 'italic',

  },
  CellInnerCont:{
    flexDirection:'row'
  },
  icon:{
    justifyContent:'center',
    alignItems:'center'
  }




});
