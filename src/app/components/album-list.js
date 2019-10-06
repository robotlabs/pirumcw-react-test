import React from 'react';
import {connect} from 'react-redux'
import AlbumItem from './album-item/album-item';
import {toggleAlbum} from './../redux/actions'
import './style.css';

const AlbumList = (props) => {
  const {dispatch, albums} = props
  const albumClicked = (album) => {
    console.log('album id', album.id)
    dispatch(toggleAlbum(album.id))
  }
  const stateLength = (Object.entries(albums).length)
    return (
      <div className="box-album-list">
        <h1 className="album-list-title">ALBUMS</h1>
        <ul className="album-list">
          {stateLength !== 0 && albums.map((albumItem, index) => {
            return (
            <AlbumItem
              passClick={albumClicked}
              key={index}
              albumItem={albumItem}>
            </AlbumItem>
            )
          })}
        </ul> 
      </div>
    );
};

export default connect(
  (state) => {
    return {albums: state.content}
  }
)(AlbumList);
