import utils from './utils';

const { rollOnTable } = utils;

export default abilities => ({
  modifiedAbilities: [...abilities],
  race: rollOnTable('races'),
});
