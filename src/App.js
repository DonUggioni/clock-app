import { useState, useContext } from 'react';
import BackgroundImg from './components/backgroundImg/BackgroundImg';
import MainInfoContainer from './components/mainInfo/MainInfoContainer';
import FooterInfo from './components/footerInfo/FooterInfo';
import ClickHandlerProvider from './store/click-handler-context';

import './App.scss';

function App() {
  return (
    <ClickHandlerProvider>
      <BackgroundImg />
      <MainInfoContainer />
      <FooterInfo />
    </ClickHandlerProvider>
  );
}

export default App;
