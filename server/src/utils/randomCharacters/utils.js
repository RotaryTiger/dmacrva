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
  console.log({ classSkills: classProfs.skills });
  console.log({ raceSkills: raceProfs.skills });
  console.log({ classLangs: classProfs.languages });
  console.log({ raceLangs: raceProfs.languages });

  return {
    weapons: uniq(classProfs.weapons.concat(raceProfs.weapons)),
    armor: uniq(classProfs.armor.concat(raceProfs.armor)),
    tools: uniq(classProfs.tools.concat(raceProfs.tools)),
    saves: uniq(classProfs.saves.concat(raceProfs.saves)),
    skills: uniq(classProfs.skills.concat(raceProfs.skills)),
    languages: uniq(classProfs.languages.concat(raceProfs.languages)),
  };
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
  addBonusesToScores,
  getUniqueProficiencies,
};
