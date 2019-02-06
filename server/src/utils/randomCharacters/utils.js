import { object, uniq, mapObject, intersection } from 'underscore';
import tables from './tables';

const rollOnArray = (array) => {
  if (!array || array.length === 0) return [];
  return array[Math.floor(Math.random() * array.length)];
};
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

const addBonusesToScores = ({ abilityScores, bonuses }) => {
  const newScores = mapObject(bonuses, (bonus, stat) => abilityScores[stat].score + bonus);
  return {
    ...newScores,
    ...getMods(newScores),
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

const getUniqueProficiencies = (classProfs, raceProfs) => {
  const rerollUntilAllUnique = (array1, array2, table) => {
    if (intersection(array1, array2).length > 0) {
      const newArray = array1;
      const offendingIndex = newArray.indexOf(intersection(array1, array2)[0]);
      newArray[offendingIndex] = rollOnTable(table);
      return rerollUntilAllUnique(newArray, array2, table);
    }
    return array1.concat(array2);
  };

  const skills = rerollUntilAllUnique(classProfs.skills, raceProfs.skills, 'skills');
  const languages = rerollUntilAllUnique(classProfs.languages, raceProfs.languages, 'languages');

  return {
    skills,
    languages,
    weapons: uniq(classProfs.weapons.concat(raceProfs.weapons)),
    armor: uniq(classProfs.armor.concat(raceProfs.armor)),
    tools: uniq(classProfs.tools.concat(raceProfs.tools)),
    saves: uniq(classProfs.saves.concat(raceProfs.saves)),
  };
};

const formatAbilityScores = scores => mapObject(scores, score => `${score.score} (${score.mod})`);

const replaceInArray = (oldValue, newValue, array) => {
  const newArray = array;
  const oldIndex = array.indexOf(oldValue);
  if (oldIndex === -1) {
    return array;
  }
  newArray[oldIndex] = newValue;
  return newArray;
};

export default {
  rollOnArray,
  rollOnTable,
  optimizeAbilityScores,
  getUniqueEntries,
  getMod,
  getMods,
  formatAbilityScores,
  addBonusesToScores,
  getUniqueProficiencies,
  replaceInArray,
};
