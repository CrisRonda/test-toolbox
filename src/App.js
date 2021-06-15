import Home from 'src/screens/Home';
import './App.css';
import {Provider} from 'react-redux';
import store from 'src/redux/store';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;
