import utils from './utils';
import tables from './tables';

export default () => {
  const { rollDie, rollOnArray } = utils;
  const {
    armor,
    dungeoneeringGear,
    generalGear1,
    generalGear2,
    helmetsAndShields,
    weapons,
  } = tables.startingGear;

  return [
    weapons(),
    armor(rollDie(20)),
    ...helmetsAndShields(rollDie(20)),
    rollOnArray(dungeoneeringGear),
    rollOnArray(generalGear1),
    rollOnArray(generalGear2),
    'Travel Rations (2 days)',
  ];
};
