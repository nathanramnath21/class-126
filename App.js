import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PickImage from './screens/camera'

export default class App extends React.Component {
render(){
return <PickImage/>
}
}

const styles = StyleSheet.create({
  container: {
  },
});
