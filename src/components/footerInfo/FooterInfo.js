import { useContext, useState } from 'react';
import { APIRequestContext } from '../../store/api-requests';
import { ClickHandlerContext } from '../../store/click-handler-context';
import dayjs from 'dayjs';

import classes from './FooterInfo.module.scss';

const dayOfYear = require('dayjs/plugin/dayOfYear');
dayjs.extend(dayOfYear);
const weekOfYear = require('dayjs/plugin/weekOfYear');
dayjs.extend(weekOfYear);

function FooterInfo() {
  const { isActive } = useContext(ClickHandlerContext);
  const { location } = useContext(APIRequestContext);

  const dayOfWeek = Number(dayjs().format('d')) + 1;
  const weekNumber = dayjs().week() - 1;
  const dayOfTheYear = dayjs().dayOfYear();
  const hour = new Date().getHours();

  const containerClassShow = `${classes.container} ${classes.active}`;
  const containerClassHide = `${classes.container}`;
  const containerClassShowNight = `${classes.container} ${classes.active} ${classes.night}`;
  const containerClassHideNight = `${classes.container} ${classes.night}`;

  const containerClass = isActive ? containerClassShow : containerClassHide;
  const containerClassNight = isActive
    ? containerClassShowNight
    : containerClassHideNight;

  return (
    <footer
      className={hour >= 6 && hour < 19 ? containerClass : containerClassNight}
    >
      <div className={classes.data__container}>
        <span>Current timezone</span>
        <h2>{location.timeZone}</h2>
      </div>
      <div className={classes.data__container}>
        <span>Day of the week</span>
        <h2>{dayOfWeek}</h2>
      </div>
      <div className={classes.data__container}>
        <span>Day of the year</span>
        <h2>{dayOfTheYear}</h2>
      </div>
      <div className={classes.data__container}>
        <span>Week number</span>
        <h2>{weekNumber}</h2>
      </div>
    </footer>
  );
}

export default FooterInfo;
