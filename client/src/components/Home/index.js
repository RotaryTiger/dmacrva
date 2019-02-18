import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';

const Home = () => (
  <div className="container-fluid">
    <div className="row justify-content-center">
      <h1 className="home-title pacifico">Daniel MacPhee</h1>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <hr className="home-title-divider" />
      </div>
      <div className="col-sm-12">
        <p className="home-subtitle">A website with some stuff I've done</p>
      </div>
    </div>

    <div className="row">
      <Link
        className="thing col-lg-4 offset-lg-4 col-md-6 offset-md-3"
        to="/breath-marches"
      >
        Like this Breath Marches character generator, for instance
      </Link>
    </div>

    <footer className="dark footer-text">© Daniel 2019</footer>
  </div>
);

export default Home;
