const tables = require('./tables');

const rollOnArray = array => array[Math.floor(Math.random() * array.length)];
const rollOnTable = table => rollOnArray(tables[`${table}`]);

module.exports = {
  rollOnArray,
  rollOnTable,
};
