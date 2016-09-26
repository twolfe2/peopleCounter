import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Increment = (props) => {
  return (

    <Text style={styles.text}>Android Increment</Text>

    )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    }
});

export default Increment;
