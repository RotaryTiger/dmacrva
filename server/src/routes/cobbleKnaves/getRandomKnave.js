import { randomKnaves } from '../../utils';

const { createRandomKnave } = randomKnaves;

export default (request, response) => {
  const { json } = request.query;
  const character = createRandomKnave();

  if (json) {
    return response.status(200).send(JSON.stringify(character, null, 4));
  }

  return response.status(200).send(character);
};
