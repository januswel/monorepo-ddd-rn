/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Todo from 'monorepo-domain'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default class MonorepoApp extends Component {
  render() {
    const todo = new Todo('first task', 'setup lerna')
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{todo.title}</Text>
        <Text style={styles.text}>{todo.task}</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('MonorepoApp', () => MonorepoApp)
