import { useEffect, useState } from 'react';

import classes from './BackgroundImg.module.scss';

function BackgroundImg() {
  const [dayTime, setDayTime] = useState('');

  const date = new Date();
  const hour = date.getHours();

  const containerDay = `${classes.container}`;
  const containerNight = `${classes.container} ${classes.night}`;
  const timeOfDay = hour >= 6 && hour <= 19 ? containerDay : containerNight;

  useEffect(() => {
    setDayTime(timeOfDay);
  }, [dayTime]);

  return <div className={dayTime} />;
}

export default BackgroundImg;
