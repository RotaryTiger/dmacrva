import { isNumber } from 'underscore';
import tables from './tables';

const rollDie = sides => (
  sides && isNumber(sides)
    ? Math.ceil(Math.random() * sides)
    : new Error(`[rollDie argument] rollDie expects a Number but got ${sides}`)
);
const rollOnArray = (array) => {
  if (!array || array.length === 0) return [];
  return array[Math.floor(Math.random() * array.length)];
};
const rollOnTable = table => rollOnArray(tables[table]);

export default {
  rollDie,
  rollOnArray,
  rollOnTable,
};
