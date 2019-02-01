import getClass from './getClass';
import { rollOnTable } from './utils';

const createRandomCharacter = () => {
  const abilities = rollOnTable('abilityScores');
  const characterClass = getClass(abilities);

  return characterClass;
};

export default createRandomCharacter;
