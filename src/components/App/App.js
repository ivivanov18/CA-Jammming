import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {

  constructor(props){
    super(props);
    

    this.state = {
      searchResults: [
        {
          id: 1,
          name: "Let It Be",
          artist: "Beatles",
          album: "White Album"
        },
        {
          id: 2,
          name: "Bohemian Rhapsody",
          artist: "Queen",
          album: "A Night at the Opera"
        },
        {
          id: 3,
          name: "Rock you Like a Hurrican",
          artist: "Scorpions",
          album: "Love at first Sting"
        }
      ],
      playlistName: "MyPlayList",
      playlistTracks: [
        {
          id: 1,
          name: "Let It Be",
          artist: "Beatles",
          album: "White Album"
        },
        {
          id: 2,
          name: "Bohemian Rhapsody",
          artist: "Queen",
          album: "A Night at the Opera"
        }
      ]
    };


    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack = (track) => {
    
    if(this.state.playlistTracks.find(trackInPlaylist => {
      if(trackInPlaylist.id === track.id){
        return;
      }
    }))

    this.setState((prevState) =>{
      playlistTracks: prevState.push(track)
    });
  }

  removeTrack = (track) => {
    const {playlistTracks} = this.state;

    const newPlaylistTracks = playlistTracks.filter((trackInPlaylist) => {
      trackInPlaylist.id === track.id
    });

    this.setState({
      playlistTracks: newPlaylistTracks
    });
  }

  updatePlaylistName = (newPlaylistName) => {
    this.setState({
      playlistName: newPlaylistName
    });
  }

  savePlaylist = () => {
    let trackURIs = [];
    let baseURI = "spotify:track:";

    this.state.playlistTracks.map(track => {
      trackURIs.push(baseURI+track.id);
    })

    return trackURIs;
  }

  search = (term) => {
    console.log(term);
  }

  render = () => {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults  searchResults={this.state.searchResults}
                            onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} 
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
