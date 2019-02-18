import getClass from './getClass';
import getRace from './getRace';
import getBackground from './getBackground';
import getDerivedValues from './getDerivedValues';
import utils from './utils';

const { rollOnTable } = utils;

const createRandomCharacter = () => {
  const abilities = rollOnTable('abilityScores');
  const characterClass = getClass(abilities);
  const characterRace = getRace(characterClass);

  const {
    className,
    hitDice,
    classFeatures,
    equipment,
    spells,
  } = characterClass;

  const {
    raceName,
    hitPoints,
    racialFeatures,
    proficiencies,
    speed,
    size,
    alignment,
    abilityScores,
    formattedAbilityScores,
  } = characterRace;

  const character = getBackground({
    raceName,
    className,
    hitDice,
    hitPoints,
    speed,
    size,
    alignment,
    abilityScores,
    formattedAbilityScores,
    racialFeatures,
    classFeatures,
    proficiencies,
    equipment,
    spells,
  });

  const derivedValues = getDerivedValues(character);

  return derivedValues;
};

export default createRandomCharacter;
