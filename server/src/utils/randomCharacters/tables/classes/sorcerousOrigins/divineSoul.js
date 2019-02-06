const affinities = [
  'Cure Wounds',
  'Inflict Wounds',
  'Bless',
  'Bane',
  'Protection from Evil and Good',
];

export default ({ rollOnArray }) => {
  const affinity = rollOnArray(affinities);

  return [
    {
      name: 'Sorcerous Origin: Divine Soul',
      description: 'A divine source glimmers within your soul, a sign that your innate magic comes from a distant but powerful familial connection to a divine being.',
    },
    {
      affinity,
      name: 'Divine Magic',
      description: `When your Spellcasting feature lets you learn or replace a cantrip or spell of 1st-level or higher, you can choose the new spell from the Cleric spell list or the Sorcerer spell list. You learn the spell ${affinity}. It counts as a Sorcerer spell for you and does not count against your number of spells known. If you later replace this spell, you must replace it with a spell from the Cleric spell list.`,
    },
    {
      name: 'Favored by the Gods',
      description: 'Once per Short or Long rest: If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome.',
    },
  ];
};
