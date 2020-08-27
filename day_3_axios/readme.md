* npm install @react-navigation/native.
* npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view.
 
## Error: Could not get BatchedBridge, make sure your bundle is packaged properly”.
* react-native run-android.
* react-native start --reset-cache.

## componentDidMount.
 useEffect(() => {
      axios
        .get(`${URL}`)
        .then((res) => {
          setMovie(res.data.results);
          console.log('res', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

## componentDidUpdate.
 useEffect(() => {
      axios
        .get(`${URL}`)
        .then((res) => {
          setMovie(res.data.results);
          console.log('res', res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [URL]);