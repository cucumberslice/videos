import axios from 'axios'

const KEY = 'AIzaSyCG6aJ6Udbd26lU7JnHc5h8Sg124rQ7OzA'



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
