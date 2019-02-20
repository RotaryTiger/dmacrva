import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

const Home = () => (
  <div className="container-fluid">
    <div className="row align-items-end thing-container">
      <div className="col thing first-thing plex">
        <Link to="/breath-marches">
          Breath
          <br />
          Marches
        </Link>
      </div>
    </div>
    <div className="row align-items-start thing-container">
      <div className="col-sm-12 thing second-thing plex">
        <Link to="/cobbleknaves">
          Cobbleknaves
        </Link>
      </div>
    </div>

    <footer className="dark footer-text">© Daniel 2019</footer>
  </div>
);

export default Home;
