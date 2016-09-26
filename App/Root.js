'use strict';

import React, { Component } from 'react';
import Counter from './Containers/Counter';

import {
  StyleSheet,
  View,
} from 'react-native';

class Root extends Component {
  render() {
    return (
      <Counter />
    );
  }
}


const styles = StyleSheet.create({

});


export default Root;