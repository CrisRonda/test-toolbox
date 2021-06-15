import {useDispatch} from 'react-redux';
import {hideLoading, showLoading} from 'src/redux/actions/uiActions';

const useFetch = () => {
  const dispatch = useDispatch();
  const fetchFunction = async (funtionToFetch, initialValue = []) => {
    try {
      dispatch(showLoading());
      const {data} = await funtionToFetch();
      dispatch(hideLoading());
      return data || initialValue;
    } catch (error) {
      dispatch(hideLoading());
      return initialValue;
    }
  };

  return {fetchFunction};
};
export default useFetch;
