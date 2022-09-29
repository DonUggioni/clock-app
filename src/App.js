import BackgroundImg from './components/backgroundImg/BackgroundImg';
import MainInfoContainer from './components/mainInfo/MainInfoContainer';
import FooterInfo from './components/footerInfo/FooterInfo';
import ClickHandlerProvider from './store/click-handler-context';
import { APIRequestContext } from './store/api-requests';
import { useContext } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import './App.scss';

import './App.scss';

function App() {
  const { isLoading } = useContext(APIRequestContext);
  return (
    <ClickHandlerProvider>
      <BackgroundImg />
      {isLoading ? (
        <MutatingDots
          wrapperClass="loadingScreen"
          height="150"
          width="150"
          color="rgb(255, 255, 255)"
          secondaryColor="rgb(0, 0, 0)"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          visible={true}
        />
      ) : (
        <>
          <MainInfoContainer />
          <FooterInfo />
        </>
      )}
    </ClickHandlerProvider>
  );
}

export default App;
