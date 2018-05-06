import React, {Component} from 'react';
import TrackList from '../TrackList/TrackList';


const defaultValue = 'New PlayList';

class Playlist extends Component{

  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  
  handleNameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.props.onNameChange(e.target.value);
  }


  render(){
    return(
      <div className="Playlist">
        <input value={defaultValue} onChange={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;