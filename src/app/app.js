import React, { Component } from 'react';
import {connect} from 'react-redux'
import AlbumList from './components/album-list'
import {addData} from './redux/actions'
import {fetchData} from './utils/api'
import './app.css';

class App extends Component {
  async componentDidMount() {
    const result = await fetchData('./data.json')
    //** store parsed results on store */
    this.props.dispatch(addData(result))
  }
  render() {
    return (
      <div className="App">
        <AlbumList></AlbumList>
      </div>
    );
  }
}

export default connect()(App);
