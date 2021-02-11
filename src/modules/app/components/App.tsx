import React from 'react';
import ManageAuth from '@forms/auth/components/ManageAuth';
import { store } from '@forms/app/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <ManageAuth />
  </Provider>
);

export default App;
