import React from 'react';
import './Main.css';
import { connect } from 'react-redux'
import Movies from './components/Movies';
import { WatchedMovies } from './components/WatchedMovies';

const Main = (props) => {

    return (
      <div>
        <div className="Main">
          <Movies />
          <WatchedMovies />
        </div>
      </div>
    );
}

export default connect(null, null)(Main)
