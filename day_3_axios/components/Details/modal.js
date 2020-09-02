import React, {useState, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ScrollView,
} from 'react-native';
import axios from 'axios';

// function Modals({modal, closeModal}){ (1. example using {}).
function Modals(props) {
  // 2. example using props.
  // console.log("modal", modal); (1. example).
  // console.log(props.modal); // 2. Example.
  // const [movieDetail, setMovieDetail] = useState([]); => to show multiple data using array.
  const [movieDetail, setMovieDetail] = useState({}); // show single data like only one id.
  const URL = `https://api.themoviedb.org/3/movie/${props.modal.id}?api_key=8ea21e1f0ed32fbc7256cfb9e61b9e4b&language=en-US`;
  // console.log("URL", URL);
  useEffect(() => {
    console.log('masuk', props.modal);
    if (props.modal.id) {
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
        <View style={styles.mainSection}>
          <View>
            <Image
              source={{uri: `${imageURL}/${movieDetail.poster_path}`}}
              // style={{width: 70, height: 81}}
              style={styles.detailsImage}
            />
          </View>
          <View style={styles.rightPane}>
            <Text style={styles.movieTitle}>{movieDetail.original_title}</Text>
            <Text style={styles.date}>{movieDetail.release_date}</Text>
            <Text style={styles.rate}>{movieDetail.vote_average}</Text>
          </View>
          
        </View>
        <View style={styles.separator}>
          <Text style={{color: "white"}}>{movieDetail.overview}</Text>
          <Text style={{color: "white"}}>{movieDetail.abridged_cast}</Text>
        </View>

        <TouchableHighlight
          style={{...styles.openButton, backgroundColor: '#2196F3'}}
          onPress={() => {
            // closeModal(false) (1. example).
            props.closeModal(false);
          }}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </TouchableHighlight>
        {/* </View> */}
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
  contentContainer: {
    padding: 10,
  },
  mainSection: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'grey',
  },
  detailsImage: {
    margin: 20,
    width: 134,
    height: 200,
    marginRight: 10,
  },
  rightPane: {
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 30,
    color: 'white',
  },
  movieTitle: {
    flex: 1,
    fontSize: 18,
    color: 'white',
    marginTop: 25,
  },
  date: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
  rate: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
  Wrapper: {
    alignSelf: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 3,
    marginVertical: 5,
  },
  Text: {
    fontFamily: 'Palatino',
    fontSize: 13,
  },
  separator: {
    backgroundColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
});
export default Modals;
