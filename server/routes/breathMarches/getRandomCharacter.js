const { createRandomCharacter } = require('./random');

module.exports = (request, response) => response.status(201).send(createRandomCharacter());
