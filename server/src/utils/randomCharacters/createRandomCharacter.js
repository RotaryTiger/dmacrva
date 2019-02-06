import getClass from './getClass';
import getRace from './getRace';
import getBackground from './getBackground';
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
    formattedAbilityScores,
    racialFeatures,
    classFeatures,
    proficiencies,
    equipment,
    spells,
  });

  return character;
};

export default createRandomCharacter;
