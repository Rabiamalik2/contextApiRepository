import React from 'react';
import {PracContext, PracProvider} from './components/global-context/global';
import MainApp from './components/MainApp';
const App = () => {
  return (
    <PracProvider>
      <MainApp />
    </PracProvider>
  );
};
export default App;
