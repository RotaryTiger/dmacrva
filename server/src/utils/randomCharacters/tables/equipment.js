const weapons = {
  melee: {
    simple: [
      'Club – 1d4 bludgeoning – light',
      'Dagger – 1d4 piercing – finesse, light, thrown (range 20/60)',
      'Greatclub – 1d8 bludgeoning – two-handed',
      'Handaxe – 1d6 slashing – light, thrown (range 20/60)',
      'Javelin – 1d6 piercing – thrown (range 30/120)',
      'Light hammer – 1d4 bludgeoning – thrown (range 20/60)',
      'Mace – 1d6 bludgeoning',
      'Quarterstaff – 1d6 bludgeoning – versatile (1d8)',
      'Sickle – 1d4 slashing – light',
      'Spear – 1d6 piercing – thrown (range 20/60), versatile (1d8)',
    ],
    martial: [
      'Battleaxe – 1d8 slashing – versatile (1d10)',
      'Flail – 1d8 bludgeoning',
      'Glaive – 1d10 slashing – heavy, reach, two-handed',
      'Greataxe – 1d12 slashing – heavy, two-handed',
      'Greatsword – 2d6 slashing – heavy, two-handed',
      'Halberd – 1d10 slashing – heavy, reach, two-handed',
      'Lance – 1d12 piercing – reach, special',
      'Longsword – 1d8 slashing – versatile (1d10)',
      'Maul – 2d6 bludgeoning – heavy, two-handed',
      'Morningstar – 1d8 piercing',
      'Pike – 1d10 piercing – heavy, reach, two-handed',
      'Rapier – 1d8 piercing – finesse',
      'Scimitar – 1d6 slashing – finesse, light',
      'Shortsword – 1d6 piercing – finesse, light',
      'Trident – 1d6 piercing – thrown (range 20/60), versatile (1d8)',
      'War pick – 1d8 piercing',
      'Warhammer – 1d8 bludgeoning – versatile (1d10)',
      'Whip – 1d4 slashing – finesse, reach',
    ],
  },
  ranged: {
    simple: [
      'Dart – 1d4 piercing – finesse, thrown (range 20/60)',
      'Light crossbow – 1d8 piercing – ammunition (range 80/320), loading, two-handed',
      'Shortbow – 1d6 piercing - ammunition (range 80/320), two-handed',
      'Sling – 1d4 bludgeoning – ammunition (range 30/120)',
    ],
    martial: [
      'Blowgun – 1 piercing – ammunition (range 25/100), loading',
      'Hand crossbow – 1d6 piercing – ammunition (range 30/120), light, loading',
      'Heavy crossbow – 1d10 piercing – ammunition (range 100/400), heavy, loading, two-handed',
      'Longbow – 1d8 piercing – ammunition (range 150/600), heavy, two-handed',
      'Net – special, thrown (range 5/15)',
    ],
  },
};

const armor = {
  light: [
    'Padded (AC 11+DEX, Disadvantage on Stealth checks)',
    'Leather (AC 11+DEX)',
    'Studded Leather (AC 12+DEX)',
  ],
  medium: [
    'Hide (AC 12+DEX [max 2])',
  ],
  heavy: [],
  shield: 'Shield',
};

const gear = {};

const tools = {
  instruments: [
    'Bagpipes',
    'Drum',
    'Dulcimer',
    'Flute',
    'Lute',
    'Lyre',
    'Horn',
    'Pan flute',
    'Shawm',
    'Viol',
  ],
};

// backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.

const packs = {
  diplomat: [
    'Chest',
    '2x cases (for maps/scrolls)',
    'Set of fine clothes',
    'Bottle of ink',
    'Ink pen',
    'Lamp',
    '2x Oil Flask',
    '5x Sheet of paper',
    'Vial of perfume',
    'Sealing wax',
    'Soap',
  ],
  dungeoneer: [
    'Backpack',
    'Crowbar',
    'Hammer',
    '10x Piton',
    '10x Torch',
    'Tinderbox',
    '10x Rations',
    'Waterskin',
    'Hempen Rope, 50ft',
  ],
  entertainer: [
    'Backpack',
    'Bedroll',
    '2x Costume',
    '5x Candle',
    '5x Rations',
    'Waterskin',
    'Disguise kit',
  ],
  explorer: [
    'Backpack',
    'Bedroll',
    'Mess kit',
    'Tinderbox',
    '10x Torch',
    '10x Rations',
    'Waterskin',
    'Hempen Rope, 50ft',
  ],
};

export default {
  weapons,
  armor,
  packs,
  gear,
  tools,
};
