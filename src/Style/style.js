import React from 'react';
import { StyleSheet, Text, View,Image, Button } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 10
  },
  baseText: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  innerText: {
    fontSize:25,
    color: 'blue'
  },
  header:{
    fontSize:40,
    fontWeight:'bold',

  },
  img:{
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 10,
    width: 300,
    height: 300,
  }
  
});

export default styles;