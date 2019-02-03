import utils from './utils';

const { rollOnTable } = utils;

export default (abilityScores) => {
  const { generateRandom } = rollOnTable('classes');

  return generateRandom(abilityScores);
};
