import React from 'react';
import {render} from '@testing-library/react';
import WordCard from 'src/components/WordCard';
import Home from 'src/screens/Home';
import {createStore} from 'redux';
import reducer from 'src/redux/reducers';
import {Provider} from 'react-redux';

function renderWithRedux(
  component,
  {initialState, store = createStore(reducer, initialState)} = {},
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

describe('Home reder no data component', () => {
  it('HomeLayout show No data  when not have words', () => {
    const {getByTestId} = renderWithRedux(<Home />);
    expect(getByTestId('no-data')).toHaveTextContent('No data');
  });
});

describe('Redux can has initial state', () => {
  it('HomeLayout have initial state', async () => {
    const {findAllByTestId} = renderWithRedux(<Home />, {
      initialState: {
        wordsState: {
          words: [
            {
              text: 'tet',
              palindrome: true,
            },
            {
              text: 'text',
              palindrome: false,
            },
          ],
        },
      },
    });
    const allCards = await findAllByTestId('card-word');
    expect(allCards).toHaveLength(2);
  });
});

describe('Word card render correctly', () => {
  it('WordCard render word text', () => {
    const word = {
      text: 'tet',
      palindrome: true,
    };
    const {getByTestId} = render(<WordCard word={word} />);
    expect(getByTestId('title')).toHaveTextContent('tet');
  });
});
