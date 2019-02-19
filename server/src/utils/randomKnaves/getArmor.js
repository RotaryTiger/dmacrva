import { find } from 'underscore';

const armors = [
  'No Armor',
  'Gambeson',
  'Brigandine',
  'Chain',
  'Half Plate',
  'Plate',
];

const parseEquipment = equipment => ({
  armor: find(equipment, item => armors.indexOf(item.name) >= 0),
  shield: find(equipment, item => item.name === 'Shield'),
  helmet: find(equipment, item => item.name === 'Helmet'),
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
