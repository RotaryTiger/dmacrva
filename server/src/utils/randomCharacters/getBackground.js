import { map, each, without } from 'underscore';
import utils from './utils';
import tables from './tables';

const { skills, equipment, languages } = tables;
const { tools } = equipment;
const { rollOnArray, rollOnTable } = utils;

const fleshOutBackground = ({ traits, ideals, bonds, flaws, others }) => ({
  trait: rollOnArray(traits),
  ideal: rollOnArray(ideals),
  bond: rollOnArray(bonds),
  flaw: rollOnArray(flaws),
  other: map(others, other => rollOnArray(other)),
});

const combineArraysAndRandomizeDuplicates = (array1, array2, source) => {
  const innerArray = array1;
  const outerArray = array2;

  each(innerArray, (value, index) => {
    const tempValue = value === 'random'
      ? rollOnArray(without(source, ...outerArray))
      : value;
    innerArray[index] = tempValue;

    if (outerArray.indexOf(tempValue) >= 0) {
      innerArray[index] = rollOnArray(without(source, ...outerArray));
    }
  });

  return [...innerArray, ...outerArray];
};

const getProficiencies = ({ background, character }) => ({
  ...character.proficiencies,
  tools: combineArraysAndRandomizeDuplicates(
    background.proficiencies.tools,
    character.proficiencies.tools,
    tools.sets,
  ),
  skills: combineArraysAndRandomizeDuplicates(
    background.proficiencies.skills,
    character.proficiencies.skills,
    skills,
  ),
  languages: combineArraysAndRandomizeDuplicates(
    background.proficiencies.languages,
    character.proficiencies.languages,
    languages,
  ),
});

export default (character) => {
  const background = rollOnTable('backgrounds');
  const { trait, ideal, bond, flaw, other } = fleshOutBackground(background);

  return {
    ...character,
    proficiencies: getProficiencies({ background, character }),
    equipment: [
      ...character.equipment,
      ...background.equipment,
    ],
    background: {
      trait,
      ideal,
      bond,
      flaw,
      ...other,
      backgroundName: background.backgroundName,
      backgroundFeature: background.feature,
    },
  };
};
