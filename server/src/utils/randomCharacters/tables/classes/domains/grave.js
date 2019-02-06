const domainName = 'Grave';

const domainFeatures = [
  {
    name: 'Divine Domain: Grave',
    description: 'You always have the following spells prepared, and they do not count against the number of spells you can prepare each day: Bane, False Life.',
  },
  {
    name: 'Circle of Mortality',
    description: 'When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die. You learn the Spare the Dying cantrip. It has a range of 30ft for you, and you can cast it as a Bonus Action.',
  },
  {
    name: 'Eyes of the Grave',
    description: 'WIS (minimum 1) times per Long rest: [Action] Until the end of your next turn, you know the location of any undead within 60ft of you that is not behind total cover and that is not protected from divination magic. This sense does not tell you anything about a creature\'s capabilities or identity.',
  },
];

export default {
  domainName,
  domainFeatures,
};
