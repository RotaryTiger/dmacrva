import { object } from 'underscore';
import tables from './tables';

export const rollOnArray = array => array[Math.floor(Math.random() * array.length)];
export const rollOnTable = table => rollOnArray(tables[table]);

export const optimizeAbilityScores = ({ abilityScores, statPrefs }) => {
  const prefferedStats = rollOnArray(statPrefs);
  return object(prefferedStats, abilityScores);
};

export default {
  rollOnArray,
  rollOnTable,
  optimizeAbilityScores,
};
