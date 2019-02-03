import { object, uniq, mapObject } from 'underscore';
import tables from './tables';

const rollOnArray = array => array[Math.floor(Math.random() * array.length)];
const rollOnTable = table => rollOnArray(tables[table]);

const getMod = score => Math.floor((score - 10) / 2);
const getMods = scores => mapObject(scores, score => ({ score, mod: getMod(score) }));

const optimizeAbilityScores = ({ abilityScores, statPrefs }) => {
  const prefferedStats = rollOnArray(statPrefs);
  const scores = object(prefferedStats, abilityScores);
  return {
    ...scores,
    ...getMods(scores),
  };
};

const getUniqueEntries = (number, array) => {
  const addAndCheck = (temp = []) => {
    temp.push(rollOnArray(array));
    if (temp.length === number && (uniq(temp).length === temp.length)) {
      return temp;
    }
    return addAndCheck(uniq(temp));
  };
  return addAndCheck();
};

const formatAbilityScores = scores => mapObject(scores, score => `${score.score} (${score.mod})`);

export default {
  rollOnArray,
  rollOnTable,
  optimizeAbilityScores,
  getUniqueEntries,
  getMod,
  getMods,
  formatAbilityScores,
};
