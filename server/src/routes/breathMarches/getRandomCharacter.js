import { randomCharacters } from '../../utils';

const { createRandomCharacter } = randomCharacters;

export default (request, response) => {
  const { json } = request.query;
  const character = createRandomCharacter();

  if (json) {
    return response.status(200).send(JSON.stringify(character, null, 4));
  }

  return response.status(200).send(character);
};
