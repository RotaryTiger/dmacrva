const tables = require('./tables');
const getClass = require('./getClass');
const getRace = require('./getRace');
const { rollOnTable } = require('./utils');

const createRandomCharacter = () => {
  const abilities = rollOnTable('abilityScores');
  const { className, abilityScores } = getClass(abilities);

  return {
    className,
    abilityScores,
  };
};

module.exports = createRandomCharacter;
