const API_TOKEN = "b6c8ed1fb1ce776fb38145510fa3fa16"

export function getFilmFromApiByText(text){

    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN + "&query="+ text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
}

export function getImageFromApi(name){

    return 'https://image.tmdb.org/t/p/w300'+ name
}