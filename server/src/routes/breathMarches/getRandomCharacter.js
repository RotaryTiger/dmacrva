import { randomCharacters } from '../../utils';

const { createRandomCharacter } = randomCharacters;

export default (request, response) => (
  response.status(201).send(createRandomCharacter())
);
