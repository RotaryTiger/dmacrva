const { rollOnTable } = require('./utils');

export default abilities => ({
  modifiedAbilities: [...abilities],
  race: rollOnTable('races'),
});
