import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Increment from '../Components/Increment';
import Decrement from '../Components/Decrement';

class Counter extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.text}>Hello World</Text>
        <Increment />
        <Decrement />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }
});


export default Counter;