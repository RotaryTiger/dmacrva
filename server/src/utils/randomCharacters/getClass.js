import utils from './utils';

const { rollOnTable } = utils;

export default (abilityScores) => {
  const randomClass = rollOnTable('classes');

  console.log({ randomClass });

  return randomClass.generateRandom(abilityScores);
};
