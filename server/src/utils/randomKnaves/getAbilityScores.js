import utils from './utils';

const abils = [
  'STR',
  'DEX',
  'CON',
  'INT',
  'WIS',
  'CHA',
];

const getWorstOfThree = () => {
  const { rollDie } = utils;
  const randos = [];

  for (let i = 0, j = 3; i < j; i += 1) {
    randos.push(rollDie(6));
  }

  return randos.sort()[0];
};

const getStat = () => {
  const bonus = getWorstOfThree();

  return {
    bonus,
    defense: bonus + 10,
  };
};

export default () => {
  const abilities = {};

  for (let i = 0, j = abils.length; i < j; i += 1) {
    abilities[abils[i]] = getStat();
  }

  return abilities;
};
