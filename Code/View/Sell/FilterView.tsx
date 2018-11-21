import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import {Image} from 'react-native';
class Example extends Component{
    render(){
        return (
            <View>
                <Text>Some thing</Text>
            </View>
        );
    }
}

export default class FilterView extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
      };
      return (
        <Image source={pic} style={{width: 100, height: 110}}/>
      );
  }
}