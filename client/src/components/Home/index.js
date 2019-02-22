import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

class Home extends Component {
  constructor() {
    super();

    const styles = [
      {
        backgroundImage: 'linear-gradient(to right, rgba(100, 182, 172, 1), rgba(218, 255, 239, 1))',
        color: 'rgba(255, 255, 239, 1)',
      },
      {
        backgroundImage: 'linear-gradient(to right, rgba(216, 30, 91, 1), rgba(235, 94, 85, 1))',
        color: 'rgba(255, 94, 85, 1)',
      },
      {
        backgroundImage: 'linear-gradient(to right, #52154E, #F9CFF2)',
        color: '#F9CFF2',
      },
      {
        backgroundImage: 'linear-gradient(to right, #F28482, #F5CAC3)',
        color: '#F5CAC3',
      },
      {
        backgroundImage: 'linear-gradient(to right, #F374AE, #E6B89C)',
        color: '#F5CAC3',
      },
      {
        backgroundImage: 'linear-gradient(to right, #DBD9DB, #45503B)',
        color: '#45503B',
      },
      {
        backgroundImage: 'linear-gradient(to right, #824C71, #DCCCA3)',
        color: '#DCCCA3',
      },
      {
        backgroundImage: 'linear-gradient(to right, #AFE3C0, #8963BA)',
        color: '#9973CA',
      },
    ];

    this.state = {
      styles,
      activeStyle: Math.floor(Math.random() * styles.length),
    };

    this.getNewStyle = this.getNewStyle.bind(this);
  }

  getNewStyle(event) {
    event.preventDefault();

    const { styles, activeStyle } = this.state;
    const getRandomNumber = (bannedNumber) => {
      const randomNumber = Math.floor(Math.random() * styles.length);

      if (randomNumber === bannedNumber) {
        return getRandomNumber(bannedNumber);
      }

      return randomNumber;
    };

    const newActiveStyle = getRandomNumber(activeStyle);

    console.log({ activeStyle });

    this.setState({
      activeStyle: newActiveStyle,
    });
  }

  render() {
    const { styles, activeStyle } = this.state;
    const { backgroundImage, color } = styles[activeStyle];

    return (
      <div style={{ backgroundImage }} className="container">
        <div className="thing-container">
          <button
            id="dmacrva"
            type="button"
            onClick={this.getNewStyle}
            style={{ color }}
          >
            dmacrva
          </button>
          <div className="thing-padding" />

          <div className="thing first-thing plex">
            <Link to="/breath-marches" style={{ color }}>
              Breath
              <br />
              Marches
            </Link>
          </div>

          <div className="thing second-thing plex">
            <Link to="/cobbleknaves" style={{ color }}>
              Cobbleknaves
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
