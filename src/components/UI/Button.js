import arrowIconDown from '../../assets/icons/icon-arrow-down.svg';
import arrowIconUp from '../../assets/icons/icon-arrow-up.svg';

import classes from './Button.module.scss';

function Button() {
  return (
    <button className={classes.btn}>
      <span>more</span>
      <div className={classes.img__container}>
        <img src={arrowIconDown} alt="Arrow icon" />
      </div>
    </button>
  );
}

export default Button;
