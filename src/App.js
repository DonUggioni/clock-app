import BackgroundImg from './components/backgroundImg/BackgroundImg';
import MainInfoContainer from './components/mainInfo/MainInfoContainer';
import FooterInfo from './components/footerInfo/FooterInfo';
import ClickHandlerProvider from './store/click-handler-context';
import APIRequestProvider from './store/api-requests';

import './App.scss';

function App() {
  return (
    <APIRequestProvider>
      <ClickHandlerProvider>
        <BackgroundImg />
        <MainInfoContainer />
        <FooterInfo />
      </ClickHandlerProvider>
    </APIRequestProvider>
  );
}

export default App;
