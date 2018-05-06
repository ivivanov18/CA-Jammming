import React, {Component} from 'react';

class Track extends Component{

  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction = () => (
    this.props.isRemoval === true
                ? <a href="#" onClick={this.addTrack}>+</a>
                : <a href="#" onClick={this.removeTrack}>-</a>

  );

  addTrack = () => {
    this.props.onAdd(this.props.track);
  }

  removeTrack = () => {
    this.props.onRemove(this.props.track);
  }


  render(){
    const {name, artist, album} = this.props.track;

    return(
      <div className="Track">
        <div className="Track-information">
          <h3>{name}</h3>
          <p>{artist} | {album}</p>
        </div>
        <a className="Track-action">
          {this.renderAction()}
        </a>
      </div>
    );
  }
}

export default Track;