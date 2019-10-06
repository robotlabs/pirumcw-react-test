import React, { Component } from 'react';
import AlbumList from './components/album-list'
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AlbumList></AlbumList>
      </div>
    );
  }
}

export default App;
