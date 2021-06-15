export const fetcher = async ({url, options = {}}) => {
  const res = await fetch(url, {
    ...options,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept',
    },
  });
  if (res.status >= 400) {
    throw new Error('Bad response from server');
  }
  return res.json();
};
