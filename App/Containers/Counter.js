import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Increment from '../Components/Increment';
import Decrement from '../Components/Decrement';

class Counter extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Welcome to People Counter!</Text>
          <Text>Counting people since 2016</Text>
        </View>
        <View style={styles.counter}>
          <Increment />
          <Text>{this.state.count}</Text>
          <Decrement />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: 25,
      alignItems: 'center',
      backgroundColor: '#F5FCFF', 
    },
    header: {
      alignItems:'center',
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    counter: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    }
});


export default Counter;