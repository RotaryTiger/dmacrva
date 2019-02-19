import utils from './utils';
import tables from './tables';

export default () => {
  const { rollOnArray } = utils;
  const {
    alignment,
    background,
    clothing,
    face,
    hair,
    misfortunes,
    physique,
    skin,
    vice,
    virtue,
  } = tables.traits;

  return {
    alignment: rollOnArray(alignment),
    background: rollOnArray(background),
    clothing: rollOnArray(clothing),
    face: rollOnArray(face),
    hair: rollOnArray(hair),
    misfortunes: rollOnArray(misfortunes),
    physique: rollOnArray(physique),
    skin: rollOnArray(skin),
    vice: rollOnArray(vice),
    virtue: rollOnArray(virtue),
  };
};
