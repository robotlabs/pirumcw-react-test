import React, { Component } from 'react';
import './style.css';

class SongItem extends Component {
  render() {
    const {albumItem} = this.props
    const {band, album} = albumItem
    return (
      <li>
          <a href='http://www.google.com'>{band + ' : ' + album}</a>
          <div className="box-author">ciao.test</div>
      </li>
    );
  }
}

export default SongItem;
