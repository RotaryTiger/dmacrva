import React from 'react';

import './app.css';

const App = () => (
  <div className="container">
    <h1 className="home-title pacifico">Daniel MacPhee</h1>
    <hr className="home-title-divider" />
    <p className="home-subtitle">A website with some stuff I've done</p>
    <div className="list-of-things">
      <a className="thing" href="#">Like this Breath Marches character generator, for instance</a>
    </div>
    <footer className="dark footer-text">© Daniel 2019</footer>
  </div>
);

export default App;
