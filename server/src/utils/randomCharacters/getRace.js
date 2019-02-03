import utils from './utils';

const { rollOnTable } = utils;

export default (characterClass) => {
  const { generateRandom } = rollOnTable('races');

  return generateRandom(characterClass);
};
