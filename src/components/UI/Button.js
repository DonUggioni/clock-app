import { useContext } from 'react';
import { ClickHandlerContext } from '../../store/click-handler-context';

import arrowIconDown from '../../assets/icons/icon-arrow-down.svg';
import arrowIconUp from '../../assets/icons/icon-arrow-up.svg';

import classes from './Button.module.scss';

function Button(props) {
  const { isActive } = useContext(ClickHandlerContext);
  const { buttonClickHandler } = useContext(ClickHandlerContext);

  const btnText = isActive === false ? 'more' : 'less';
  const btnIcon = isActive === false ? arrowIconDown : arrowIconUp;

  return (
    <button className={classes.btn} onClick={buttonClickHandler}>
      <span>{btnText}</span>
      <div className={classes.img__container}>
        <img src={btnIcon} alt="Arrow icon" />
      </div>
    </button>
  );
}

export default Button;
