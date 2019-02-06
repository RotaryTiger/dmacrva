export const ancestries = [
  ['Black', 'Acid'],
  ['Blue', 'Lightning'],
  ['Brass', 'Fire'],
  ['Bronze', 'Lightning'],
  ['Copper', 'Acid'],
  ['Gold', 'Fire'],
  ['Green', 'Poison'],
  ['Red', 'Fire'],
  ['Silver', 'Cold'],
  ['White', 'Cold'],
];

export default ({ rollOnArray }) => {
  const ancestry = rollOnArray(ancestries);
  return [
    {
      name: 'Sorcerous Origin: Draconic Bloodline',
      description: `Your innate magic comes from ${ancestry[0]} draconic magic that mingled with your blood, or that of your ancestors. You can speak, read, and write Draconic. Whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.`,
    },
    {
      name: 'Draconic Resilience',
      description: `+1 hit points per level (not reflected on character sheet). Additionally, parts of your skin are covered by a thin sheen of ${ancestry[0]} dragon-like scales. When you aren’t wearing armor, your AC = 13 + DEX.`,
    },
  ];
};
