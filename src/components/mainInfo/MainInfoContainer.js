import { useContext } from 'react';
import { ClickHandlerContext } from '../../store/click-handler-context';
import { APIRequestContext } from '../../store/api-requests';
import Button from '../UI/Button';

import sunIcon from '../../assets/icons/icon-sun.svg';
import refreshIcon from '../../assets/icons/icon-refresh.svg';

import classes from './MainInfoContainer.module.scss';

function MainInfoContainer() {
  const { isActive } = useContext(ClickHandlerContext);
  const { quote } = useContext(APIRequestContext);

  const randomQuote = {
    quote: quote.content,
    author: quote.author,
  };

  const containerClassShow = `${classes.container} ${classes.active}`;
  const containerClassHide = `${classes.container}`;
  const containerClass = isActive ? containerClassShow : containerClassHide;

  return (
    <main className={containerClass}>
      <div className={classes.quote__container}>
        <div className={classes.quote}>
          <p>{randomQuote.quote}</p>
          <span>{randomQuote.author}</span>
        </div>
        <button>
          <img src={refreshIcon} alt="refresh icon" />
        </button>
      </div>
      <div className={classes.location__info}>
        <div className={classes.greeting__container}>
          <img src={sunIcon} alt="icon" />
          <h2>GOOD MORNING, IT’S CURRENTLY</h2>
        </div>
        <div className={classes['hour__info-wrapper']}>
          <div className={classes['hour__info-inner']}>
            <div className={classes.hour__info}>
              <h1>11:37</h1>
              <span>BST</span>
            </div>
            <h3 className={classes.location}>IN London, UK</h3>
          </div>
          <Button />
        </div>
      </div>
    </main>
  );
}

export default MainInfoContainer;
