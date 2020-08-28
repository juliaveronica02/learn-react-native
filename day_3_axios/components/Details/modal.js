import React, {useState, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import axios from 'axios';

// function Modals({modal, closeModal}){ (1. example using {}).
function Modals(props) {
  // 2. example using props.
  // console.log("modal", modal); (1. example).

  console.log(props.modal); // 2. Example.
  const [movieDetail, setMovieDetail] = useState([]);
  const URL =
    'https://api.themoviedb.org/3/movie/{movie_id}?api_key=8ea21e1f0ed32fbc7256cfb9e61b9e4b&language=en-US';
  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((res) => {
        setMovieDetail(res.data.results);
        console.log('res', res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log('movie', movieDetail);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modal}
        onRequestClose={() => {
          // closeModal(false) (1. example).
          props.closeModal(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{props.title}</Text>
            {/* <View style={styles.thumbnail}> */}
          {/* <Image
            source={{uri: `https://api.themoviedb.org/3/movie/724989?api_key=8ea21e1f0ed32fbc7256cfb9e61b9e4b&language=en-US/{poster_path}`}}
            style={{width: 70, height: 81}}
          />
        </View> */}
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                // closeModal(false) (1. example).
                props.closeModal(false);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  thumbnail: {
    margin: 10,
    paddingLeft: 5,
  },
});
export default Modals;
