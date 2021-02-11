import React from 'react';
import ManageAuth from 'modules/auth/components/ManageAuth';
import { store } from 'modules/app/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <ManageAuth />
  </Provider>
);

export default App;
