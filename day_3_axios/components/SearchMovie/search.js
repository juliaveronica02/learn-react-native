import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, ScrollView} from 'react-native';
import axios from 'axios';

function Search() {
  const [search, setSearch] = useState([])
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=8ea21e1f0ed32fbc7256cfb9e61b9e4b&query=${value}` 
  useEffect(() => {
    axios.get(URL)
    .then((res) => {
      setSearch(res.data.results)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [value])

  onChangeHandler = async e => {
    search(e.target.value);
    setState({ value: e.target.value });
  };
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search Movie!</Text>
      <TextInput value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search" />
    </View>
  );
}

export default Search;