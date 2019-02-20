import React, { Component } from 'react';
import { object } from 'prop-types';

class Abilities extends Component {
  constructor(props) {
    super(props);

    const { STR, DEX, CON, INT, WIS, CHA } = this.props;

    this.state = {
      STR,
      DEX,
      CON,
      INT,
      WIS,
      CHA,
    };
  }

  render() {
    const { STR, DEX, CON, INT, WIS, CHA } = this.state;
    return (
      <div>
        {STR}
        {DEX}
        {CON}
        {INT}
        {WIS}
        {CHA}
      </div>
    );
  }
}

Abilities.propTypes = {
  STR: object,
  DEX: object,
  CON: object,
  INT: object,
  WIS: object,
  CHA: object,
};

export default Abilities;
