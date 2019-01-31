const { rollOnTable } = require('./utils');

module.exports = (abilities) => {
  return {
    modifiedAbilities: [...abilities],
    race: rollOnTable('races'),
  };
};
