import React, { Component } from 'react';
import axios from 'axios';


import './reset.min.css';
import './breathMarches.css';
import Sheet from './components/Sheet';

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

    if (!random) return null

    return <Sheet toon={random}></Sheet>
  }
}


export default BreathMarches;
