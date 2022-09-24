import sunIcon from '../../assets/icons/icon-sun.svg';
import refreshIcon from '../../assets/icons/icon-refresh.svg';

import classes from './MainInfoContainer.module.scss';

function MainInfoContainer(props) {
  return (
    <main className={classes.container}>
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
          <img src={sunIcon} alt="sun icon" />
          <h2>GOOD MORNING, IT’S CURRENTLY</h2>
        </div>
        <div className={classes.hour__info}>
          <h1>11:37</h1>
          <span>BST</span>
        </div>
        <h3 className={classes.location}>IN LONDON, UK</h3>
      </div>
    </main>
  );
}

export default MainInfoContainer;
