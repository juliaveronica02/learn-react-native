import React from 'react' 
import { StyleSheet, View, Text, Image } from 'react-native'
import { getImageFromApi } from './tmdbApi'

class FilmItem extends React.Component{

    render() { 
        const film = this.props.film
        return (
            
            <View style={ style.main_container }>
                <View style={ style.container_left }>
                    <Image
                        style={ style.container_left_image }
                        source={{ uri: getImageFromApi(film.poster_path) }}
                    />
                </View>
                <View style={ style.container_right }>
                    <View style={ style.container_right_top }>
                        <Text style={style.container_right_top_text}>{film.title}</Text>
                        <Text style={style.container_right_top_vote}>{film.vote_average}</Text>
                    </View>
                    <View style={ style.container_right_middle }>
                        <Text style={style.container_right_middle_overview} numberOfLines={6}>{film.overview}</Text>
                    </View>
                    <View style={ style.container_right_bottom }>
                        <Text style={style.container_right_bottom_date}>Release: {film.release_date}</Text>
                    </View>
                    
                </View>
                
            </View>
        )
    }
}

const style = StyleSheet.create({ // Utilisation de l'API

    main_container: {
        height: 190,
        flex: 1,
        flexDirection: 'row'
    },
    container_left: {
        flex: 1
    },
    container_left_image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },  
    container_right: {
        flex: 2
    },
    container_right_top: {
        flex: 2,
        flexDirection: 'row'
    },
    container_right_top_text: {
        flex: 2,
        fontSize: 20,
        fontWeight: 'bold'
    },
    container_right_top_vote: {
        flex: 1,
        textAlign: 'right',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 5   
    },
    container_right_middle: {
        flex: 3
    },
    container_right_middle_overview: {
        color: 'grey'
    },
    container_right_bottom: {
        flex: 1
    },
    container_right_bottom_date: {
        textAlign: 'right',
        color: 'grey',
        margin: 5
    },
    title_text: {
       
    }
})

export default FilmItem