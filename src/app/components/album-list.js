import React, { Component } from 'react';
import {connect} from 'react-redux'
import './style.css';

class AlbumList extends Component {
  render() {
    const stateLength = (Object.entries(this.props.albums).length)
    return (
      <div className="box-album-list">
        <h1 className="album-list-title">ALBUMS</h1>
        <ul className="album-list">
          {stateLength !== 0 && this.props.albums.map((albumItem, index) => {
            return (<div
              key={index}>
            </div>)
          })}
        </ul> 
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {albums: state.content}
  }
)(AlbumList);
