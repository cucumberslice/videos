import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideList from './VideoList'

class App extends React.Component {

    state = { videos: []}

    onTermSubmit = async (term) => {
       const response = await youtube.get('/search',{
           params: {
               q: term
           }
       })

       this.setState({videos: response.data.items})
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App

