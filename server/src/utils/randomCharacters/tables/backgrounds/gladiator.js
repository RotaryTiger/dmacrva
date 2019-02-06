import equipment from '../equipment';

const { melee } = equipment.weapons;

export default {
  backgroundName: 'Gladiator',
  traits: [
    'I know a story relevant to almost every situation.',
    'Whenever I come to a new place, I collect local rumors and spread gossip.',
    'I am a hopeless romantic, always searching for that special someone.',
    'Nobody stays angry at me or around me for long, since I can defuse any amount of tension.',
    'I love a good insult, even one directed at me.',
    'I get bitter if I\'m not the center of attention.',
    'I will settle for nothing less than perfection.',
    'I change my mood or my mind as quickly as I change key in a song.',
  ],
  ideals: [
    'Beauty. When I perform, I make the world better than it was.',
    'Tradition. The stories, legends, and songs of the past must never be forgotten, for they teach us who we are.',
    'Creativity. The world is in need of new ideas and bold action.',
    'Greed. I am only in it for the money and fame.',
    'People. I like seeing the smiles on people\'s faces when I perform. That\'s all that matters.',
    'Honesty. Art should reflect the soul; it should come from within and reveal who we truly are.',
  ],
  bonds: [
    'My instrument is my most treasured possession, and it reminds me of someone I love.',
    'Someone stole my precious instrument, and someday I will get it back.',
    'I want to be famous, whatever it takes.',
    'I idolize a hero of the old tales, and measure my deeds against theirs.',
    'I will do anything to prove myself superior to my hated rival.',
    'I would do anything for the other members of my old troupe.',
  ],
  flaws: [
    'I will do anything to win fame and renown.',
    'I\'m a sucker for a pretty face.',
    'A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.',
    'I once satirized a noble who still wants my head. It is a mistake I will likely repeat.',
    'I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.',
    'Despite my best efforts, I am unreliable to my friends.',
  ],
  others: [
    [
      'Routine of expertise: Actor.',
      'Routine of expertise: Dancer.',
      'Routine of expertise: Fire-eater.',
      'Routine of expertise: Jester.',
      'Routine of expertise: Juggler.',
      'Routine of expertise: Instrumentalist.',
      'Routine of expertise: Poet.',
      'Routine of expertise: Singer.',
      'Routine of expertise: Storyteller.',
      'Routine of expertise: Tumbler.',
    ],
  ],
  feature: {
    name: 'By Popular Demand',
    description: 'You can always find a place to perform, like a gladiatorial arena or secret underground pit fighting club. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you fight each night. In addition, your performances make you something of a local figure. When strangers recognize you in a town where you have fought, they typically take a liking to you.',
  },
  proficiencies: {
    skills: ['Acrobatics', 'Performance'],
    tools: ['Disguise kit', 'instrument'],
    languages: [],
  },
  equipment: [
    melee.martial[14],
    'Love letter, locket, or trinket from an admirer',
    'Costume',
    'Pouch',
    '15 gp',
  ],
};
