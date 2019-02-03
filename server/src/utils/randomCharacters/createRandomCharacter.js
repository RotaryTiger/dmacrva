import getClass from './getClass';
import utils from './utils';

const { rollOnTable } = utils;

const createRandomCharacter = () => {
  const abilities = rollOnTable('abilityScores');
  const characterClass = getClass(abilities);

  return characterClass;
};

export default createRandomCharacter;
