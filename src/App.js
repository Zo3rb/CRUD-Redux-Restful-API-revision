import React, { Fragment } from 'react';
import AppRouter from './routers/AppRouter';
import { NavigationBar } from './components';
import './styles/style.scss';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <AppRouter />
    </Fragment>
  );
}

export default App;
