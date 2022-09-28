import { useContext } from 'react';
import { ClickHandlerContext } from '../../store/click-handler-context';
import { APIRequestContext } from '../../store/api-requests';
import Button from '../UI/Button';
import Greeting from '../greetingText/Greeting';

import sunIcon from '../../assets/icons/icon-sun.svg';
import moonIcon from '../../assets/icons/icon-moon.svg';
import refreshIcon from '../../assets/icons/icon-refresh.svg';

import classes from './MainInfoContainer.module.scss';

function MainInfoContainer() {
  const { isActive } = useContext(ClickHandlerContext);
  const { quote } = useContext(APIRequestContext);
  const { location } = useContext(APIRequestContext);

  const randomQuote = {
    quote: quote.content,
    author: quote.author,
  };

  const date = new Date();
  const hours = date.getHours();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  const formattedHours = date.toLocaleTimeString('en-US', options);

  const containerClassShow = `${classes.container} ${classes.active}`;
  const containerClassHide = `${classes.container}`;
  const containerClass = isActive ? containerClassShow : containerClassHide;

  function greetingText() {
    if (hours >= 6 && hours <= 12) {
      return <Greeting message={'good morning'} src={sunIcon} />;
    }

    if (hours > 12 && hours < 19) {
      return <Greeting message={'good afternoon'} src={sunIcon} />;
    }

    if (hours >= 19 && hours < 6) {
      return <Greeting message={'good evening'} src={moonIcon} />;
    }
  }

  return (
    <main className={containerClass}>
      <div className={classes.quote__container}>
        <div className={classes.quote}>
          <p>{randomQuote.quote}</p>
          <span>{randomQuote.author}</span>
        </div>
      </div>
      <div className={classes.location__info}>
        {greetingText()}
        <div className={classes['hour__info-wrapper']}>
          <div className={classes['hour__info-inner']}>
            <div className={classes.hour__info}>
              <h1>{formattedHours}</h1>
              <span>{location.timeSaving}</span>
            </div>
            <h3 className={classes.location}>
              IN {location.city}, {location.country}
            </h3>
          </div>
          <Button />
        </div>
      </div>
    </main>
  );
}

export default MainInfoContainer;
