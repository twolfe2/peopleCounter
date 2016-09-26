import React, { Component } from 'react';
import Root from './App/Root';
import {
  AppRegistry,
} from 'react-native';

class PeopleCounter extends Component {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('PeopleCounter', () => PeopleCounter);
