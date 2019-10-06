import React from 'react';
import './style.css';

const SongItem = (props) => {
  const {albumItem, passClick} = props
    const {band, album, songs} = albumItem
    return (
      <li
          className='box-album-item'
          onClick = { () => {
            passClick(albumItem);
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
};

export default SongItem;
