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
  // console.log(props.modal); // 2. Example.
  // const [movieDetail, setMovieDetail] = useState([]); => to show multiple data using array.
  const [movieDetail, setMovieDetail] = useState({}); // show single data like only one id.
  const URL =
    `https://api.themoviedb.org/3/movie/${props.modal.id}?api_key=8ea21e1f0ed32fbc7256cfb9e61b9e4b&language=en-US`;
    // console.log("URL", URL);
  useEffect(() => {
    console.log("masuk", props.modal);
    if(props.modal.id) {
      axios
        .get(URL)
        .then((res) => {
          setMovieDetail(res.data);
          console.log('res', res.data);
        })
         .catch((err) => {
        console.log(err);
      });
    }
   
  }, [props.modal.id]);

  // console.log('movie detail', movieDetail);
  const imageURL = 'https://image.tmdb.org/t/p/w500';
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modal.isShow}
        onRequestClose={() => {
          // closeModal(false) (1. example).
          props.closeModal(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
             <View style={styles.thumbnail}> 
          <Image
            source={{uri: `${imageURL}/${movieDetail.poster_path}`}}
            style={{width: 70, height: 81}}
          />
        </View> 
            <View>
            <Text style={styles.title}>{movieDetail.title}</Text>
            </View>
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
    width: '80%',
    height: '50%',
    margin: 20,
    backgroundColor: '#E3E6E8',
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
    marginTop: 50,
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
  title: {
    fontSize: 17,
    paddingTop: 10,
    paddingBottom: 4,
    paddingRight: 5,
    textAlign: 'center',
    color: '#2471A3',
  },
});
export default Modals;