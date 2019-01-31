const { object } = require('underscore');
const { rollOnArray, rollOnTable } = require('./utils');

const optimizeAbilityScores = ({ abilities, statPrefs }) => {
  const prefferedStats = rollOnArray(statPrefs);

  return object(prefferedStats, abilities);
};

module.exports = (abilities) => {
  const randomClass = rollOnTable('classes');
  const { statPrefs } = randomClass;
  const optimizedScores = optimizeAbilityScores({ abilities, statPrefs });

  return {
    className: randomClass.name,
    abilityScores: optimizedScores,
  };
};
