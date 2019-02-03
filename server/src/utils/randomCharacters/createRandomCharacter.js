import getClass from './getClass';
import getRace from './getRace';
import utils from './utils';

const { rollOnTable } = utils;

const createRandomCharacter = () => {
  const abilities = rollOnTable('abilityScores');
  const characterClass = getClass(abilities);
  const characterRace = getRace(characterClass);

  const { className, hitDice, classFeatures, equipment } = characterClass;
  const {
    raceName,
    hitPoints,
    racialFeatures,
    proficiencies,
    speed,
    size,
    alignment,
    formattedAbilityScores,
  } = characterRace;

  return {
    raceName,
    className,
    hitDice,
    hitPoints,
    speed,
    size,
    alignment,
    formattedAbilityScores,
    racialFeatures,
    classFeatures,
    proficiencies,
    equipment,
  };
};

export default createRandomCharacter;
