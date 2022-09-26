import { useContext } from 'react';
import { ClickHandlerContext } from '../../store/click-handler-context';
import Button from '../UI/Button';

import sunIcon from '../../assets/icons/icon-sun.svg';
import refreshIcon from '../../assets/icons/icon-refresh.svg';

import classes from './MainInfoContainer.module.scss';

function MainInfoContainer() {
  const { isActive } = useContext(ClickHandlerContext);

  const containerClassShow = `${classes.container} ${classes.active}`;
  const containerClassHide = `${classes.container}`;
  const containerClass = isActive ? containerClassShow : containerClassHide;

  return (
    <main className={containerClass}>
      <div className={classes.quote__container}>
        <div className={classes.quote}>
          <p>
            “The science of operations, as derived from mathematics more
            especially, is a science of itself, and has its own abstract truth
            and value.”
          </p>
          <span>Ada Lovelace</span>
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
            <h3 className={classes.location}>IN LONDON, UK</h3>
          </div>
          <Button />
        </div>
      </div>
    </main>
  );
}

export default MainInfoContainer;
