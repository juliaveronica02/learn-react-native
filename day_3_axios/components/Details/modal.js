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
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.mainSection}>
            <Image
              source={{uri: `${imageURL}/${movieDetail.poster_path}`}}
              // style={{width: 70, height: 81}}
              style={styles.detailsImage}
            />
            <View style={styles.rightPane}>
              <Text style={styles.movieTitle}>
                {movieDetail.original_title}
              </Text>
              <Text>{movieDetail.release_date}</Text>
              <View style={styles.Wrapper}>
                <Text style={styles.Text}>NR</Text>
              </View>
              <Text>{movieDetail.vote_average}</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <Text>{movieDetail.overview}</Text>
          <View style={styles.separator} />
          <Text>{movieDetail.abridged_cast}</Text>
        </ScrollView>

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
  },
  detailsImage: {
    width: 134,
    height: 200,
    backgroundColor: '#eaeaea',
    marginRight: 10,
  },
  rightPane: {
    justifyContent: 'space-between',
    flex: 1,
  },
  movieTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
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
    fontWeight: '500',
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});
export default Modals;
