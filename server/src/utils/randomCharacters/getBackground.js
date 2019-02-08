import { map, each, without } from 'underscore';
import utils from './utils';
import tables from './tables';

const { skills, equipment, languages } = tables;
const { tools, weapons } = equipment;
const { rollOnArray, rollOnTable } = utils;
const { ranged, melee } = weapons;

const everyTool = [
  ...tools.sets,
  ...tools.artisans,
  ...tools.gaming,
  ...tools.instruments,
];

const everyWeapon = [
  ...melee.simple,
  ...melee.martial,
  ...ranged.simple,
  ...ranged.martial,
];

const fleshOutBackground = ({ traits, ideals, bonds, flaws, others }) => ({
  trait: rollOnArray(traits),
  ideal: rollOnArray(ideals),
  bond: rollOnArray(bonds),
  flaw: rollOnArray(flaws),
  others: map(others, other => rollOnArray(other)),
});

const randomizeFromKeyword = ({ value, source, exclude }) => {
  if (value === 'random') return rollOnArray(without(source, ...exclude));
  if (value === 'instrument') return rollOnArray(without(tools.instruments, ...exclude));
  if (value === 'gaming') return rollOnArray(without(tools.gaming, ...exclude));
  if (value === 'artisans') return rollOnArray(without(tools.artisans, ...exclude));
  if (value) return value;

  return rollOnArray(without(source, ...exclude));
};

const combineArraysAndRandomizeDuplicates = (array1, array2, source) => {
  const innerArray = array1;
  const outerArray = array2;

  console.log('==================================================================');
  console.log({ innerArray });

  each(innerArray, (value, index) => {
    const tempValue = randomizeFromKeyword({ value, source, exclude: outerArray });
    innerArray[index] = tempValue;

    if (outerArray.indexOf(tempValue) >= 0) {
      innerArray[index] = randomizeFromKeyword({ source, exclude: outerArray });
    }
  });

  console.log({ innerArray });
  console.log('==================================================================');

  return [...innerArray, ...outerArray];
};

const getProficiencies = ({ background, character }) => ({
  ...character.proficiencies,
  tools: combineArraysAndRandomizeDuplicates(
    background.proficiencies.tools,
    character.proficiencies.tools,
    everyTool,
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
  const { trait, ideal, bond, flaw, others } = fleshOutBackground(background);

  return {
    ...character,
    proficiencies: getProficiencies({ background, character }),
    equipment: [
      ...combineArraysAndRandomizeDuplicates(
        background.equipment,
        character.equipment,
        [...everyTool, ...everyWeapon],
      ),
    ],
    background: {
      trait,
      ideal,
      bond,
      flaw,
      others,
      backgroundName: background.backgroundName,
      backgroundFeature: background.feature,
    },
  };
};
