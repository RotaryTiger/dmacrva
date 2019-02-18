import React, { Component } from 'react';
import axios from 'axios';

import './breathMarches.css';

class BreathMarches extends Component {
  constructor() {
    super();

    this.state = {
      random: {},
    };
  }

  componentDidMount() {
    const options = {
      method: 'get',
      url: '/api/breath-marches/random',
    };

    axios(options)
      .then(({ data }) => {
        console.log(data);
        this.setState({ random: data });
      })
      .catch((err) => {
        console.log(JSON.stringify(err, null, 4));
      });
  }

  render() {
    const { random } = this.state;
    return (
      <div className="breath">
        <pre>{ JSON.stringify(random, null, 4) }</pre>
      </div>
    );
  }
}

export default BreathMarches;
