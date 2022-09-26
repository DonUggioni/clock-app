import { useContext } from 'react';
import { ClickHandlerContext } from '../../store/click-handler-context';

import classes from './FooterInfo.module.scss';

function FooterInfo() {
  const { isActive } = useContext(ClickHandlerContext);

  const containerClassShow = `${classes.container} ${classes.active}`;
  const containerClassHide = `${classes.container}`;

  const containerClass = isActive ? containerClassShow : containerClassHide;

  return (
    <footer className={containerClass}>
      <div className={classes.data__container}>
        <span>Current timezone</span>
        <h2>Europe/London</h2>
      </div>
      <div className={classes.data__container}>
        <span>Day of the week</span>
        <h2>5</h2>
      </div>
      <div className={classes.data__container}>
        <span>Day of the year</span>
        <h2>295</h2>
      </div>
      <div className={classes.data__container}>
        <span>Week number</span>
        <h2>42</h2>
      </div>
    </footer>
  );
}

export default FooterInfo;
