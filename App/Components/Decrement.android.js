import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const Decrement = (props) => {
  return (

    <Text style={styles.text}>Android Decrement</Text>

    )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    }
});

export default Decrement;
