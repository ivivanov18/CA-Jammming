import React, { Component } from 'react';
import Track from '../Track/Track';

//You will add a map method that renders a set of Track components

class TrackList extends Component{
  render(){
    const {tracks, onAdd, onRemove, isRemoval} = this.props;

    return(
      <div className="TrackList">
        {tracks.map(track => (
          <Track id={track.id} track={track} onAdd={onAdd} isRemoval={isRemoval} onRemove={onRemove} />
        ))}
      </div>
    );
  }
}

export default TrackList;