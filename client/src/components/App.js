import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import BreathMarches from './BreathMarches';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/breath-marches" component={BreathMarches} />
    </div>
  </Router>
);

export default App;
