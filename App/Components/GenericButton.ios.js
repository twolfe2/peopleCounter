import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

const GenericButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    }
});


export default GenericButton;
