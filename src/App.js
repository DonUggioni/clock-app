import { Fragment } from 'react';
import BackgroundImg from './components/backgroundImg/BackgroundImg';
import MainInfoContainer from './components/mainInfo/MainInfoContainer';
import FooterInfo from './components/footerInfo/FooterInfo';

import './App.scss';

function App() {
  return (
    <Fragment>
      <BackgroundImg />
      <MainInfoContainer />
      <FooterInfo />
    </Fragment>
  );
}

export default App;
