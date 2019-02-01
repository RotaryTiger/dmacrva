import { rollOnTable } from './utils';

export default (abilityScores) => {
  const { generateRandom } = rollOnTable('classes');

  return generateRandom(abilityScores);
};
