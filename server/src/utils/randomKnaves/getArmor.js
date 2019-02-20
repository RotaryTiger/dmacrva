import { find } from 'underscore';

const parseEquipment = equipment => ({
  armor: find(equipment, item => item.type === 'armor'),
  shield: find(equipment, item => item.type === 'shield'),
  helmet: find(equipment, item => item.type === 'helmet'),
});

const parseArmor = ({ armor, shield, helmet }) => {
  const { defense } = armor;
  const shieldDefense = shield && shield.defense ? shield.defense : 0;
  const helmDefense = helmet && helmet.defense ? helmet.defense : 0;
  const total = defense + shieldDefense + helmDefense;

  return {
    defense: total,
    bonus: total - 10,
  };
};

export default equipment => parseArmor(parseEquipment(equipment));
