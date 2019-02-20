import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import BreathMarches from './BreathMarches';
import Cobbleknaves from './Cobbleknaves';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/breath-marches" component={BreathMarches} />
      <Route path="/cobbleknaves" component={Cobbleknaves} />
    </div>
  </Router>
);

export default App;
