/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Config from 'react-native-config';
import firebase from 'firebase';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDoWGVZpr_u5SKVQk3zNaQ-t98i0JWdzvw',
            authDomain: 'odsi-gestiontiempos.firebaseapp.com',
            databaseURL: 'https://odsi-gestiontiempos.firebaseio.com',
            projectId: 'odsi-gestiontiempos',
            storageBucket: 'odsi-gestiontiempos.appspot.com',
            messagingSenderId: '921623046756'
        });
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Firebase Proyect!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
