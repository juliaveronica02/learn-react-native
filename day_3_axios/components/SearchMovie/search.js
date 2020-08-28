import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

function Search() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Search Movie!</Text>
      </View>
    );
  }

export default Search;