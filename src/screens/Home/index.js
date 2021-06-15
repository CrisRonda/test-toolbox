/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useFetch from 'src/hooks/useFetch';
import {setWords} from 'src/redux/actions';
import {getWords, saveWord} from 'src/services';
import SearchHeader from 'src/components/Search';

const {default: HomeLayout} = require('./layout');

const Home = () => {
  const {words} = useSelector(({wordsState}) => wordsState);
  const {loadingFetch} = useSelector(({uiState}) => uiState);
  const dispatch = useDispatch();
  const {fetchFunction} = useFetch();
  const [textToSearch, setTextToSearch] = useState('');

  useEffect(() => {
    const getInitialData = async () => {
      const data = await fetchFunction(getWords, {data: []});
      dispatch(setWords(data));
    };
    getInitialData();
  }, [dispatch]);

  const onSearchWord = async () => {
    if (textToSearch) {
      const data = await fetchFunction(() => saveWord(textToSearch));
      dispatch(setWords([data, ...words]));
      setTextToSearch('');
    }
  };

  return (
    <>
      <SearchHeader
        onClickSend={onSearchWord}
        text={textToSearch}
        onChange={value => setTextToSearch(value)}
      />
      {words.length ? (
        <HomeLayout words={words} />
      ) : (
        <h1 data-testid="no-data" className="color-white">
          No data
        </h1>
      )}
      {loadingFetch && (
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Home;
