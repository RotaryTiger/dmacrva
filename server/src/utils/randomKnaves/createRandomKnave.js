import getAbilityScores from './getAbilityScores';
import getEquipment from './getEquipment';
import getTraits from './getTraits';
import getHitPoints from './getHitPoints';
import getArmor from './getArmor';

export default () => {
  const abilityScores = getAbilityScores();
  const equipment = getEquipment();
  const traits = getTraits();
  const hitPoints = getHitPoints();
  const armor = getArmor(equipment);

  return {
    abilityScores,
    equipment,
    traits,
    hitPoints,
    armor,
    healingRate: `1d8 + ${abilityScores.CON.bonus}`,
    speed: {
      exploration: 120,
      combat: 40,
    },
  };
};
