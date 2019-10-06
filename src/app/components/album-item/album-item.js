import React, { Component } from 'react';
import './style.css';

class SongItem extends Component {
  
  render() {
    const {albumItem} = this.props
    const {band, album, songs} = albumItem
    return (
      <li
          className='box-album-item'
          onClick = { () => {
            this.props.passClick(albumItem);
          }}>
          {band + ' : ' + album}
          { <ul className="song-list">
          {albumItem.opened && songs.map((item, index) => {
            return (<li
              className='box-subitem'
              key={index}>
                {item.song}
            </li>)
          })}
          </ul> }
          <div className="box-author">{}</div>
      </li>
    );
  }
}

export default SongItem;
