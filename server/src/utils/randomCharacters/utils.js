import { object } from 'underscore';
import tables from './tables';

const rollOnArray = array => array[Math.floor(Math.random() * array.length)];
const rollOnTable = table => rollOnArray(tables[table]);

const optimizeAbilityScores = ({ abilityScores, statPrefs }) => {
  const prefferedStats = rollOnArray(statPrefs);
  return object(prefferedStats, abilityScores);
};

export default {
  rollOnArray,
  rollOnTable,
  optimizeAbilityScores,
};
