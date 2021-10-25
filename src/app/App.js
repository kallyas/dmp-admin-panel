import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Navigation } from '../navigation/Navigation';


export const App = () => {
  return (
  <div>
    <Provider store={store}>
        <Navigation/>
    </Provider>
  </div>
  );
};


export default App;
