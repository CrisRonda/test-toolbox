import {fetcher} from 'src/utils';

const END_POINT = 'http://localhost:3001';

export const getWords = () => fetcher({url: `${END_POINT}/`});
export const saveWord = word =>
  fetcher({
    url: `${END_POINT}/iecho?text=${word}`,
    options: {
      method: 'POST',
    },
  });
