import { Fragment } from 'react';
import BackgroundImg from './components/backgroundImg/BackgroundImg';
import MainInfoContainer from './components/mainInfo/MainInfoContainer';

import './App.scss';

function App() {
  return (
    <Fragment>
      <BackgroundImg />
      <MainInfoContainer />
    </Fragment>
  );
}

export default App;
