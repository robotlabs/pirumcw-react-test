import React, { Component } from 'react';
import {connect} from 'react-redux'
import AlbumItem from './album-item/album-item';
import {toggleAlbum} from './../redux/actions'
import './style.css';

class AlbumList extends Component {
  albumClicked = (album) => {
    console.log('album id', album.id)
    this.props.dispatch(toggleAlbum(album.id))
  }
  render() {
    const stateLength = (Object.entries(this.props.albums).length)
    return (
      <div className="box-album-list">
        <h1 className="album-list-title">ALBUMS</h1>
        <ul className="album-list">
          {stateLength !== 0 && this.props.albums.map((albumItem, index) => {
            return (
            <AlbumItem
              passClick={this.albumClicked}
              key={index}
              albumItem={albumItem}>
            </AlbumItem>
            )
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
