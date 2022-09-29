import { useState, useEffect } from 'react';

import classes from '../mainInfo/MainInfoContainer.module.scss';

function Greeting(props) {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth });

  function getSize() {
    setWindowSize({
      width: window.innerWidth,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', getSize);

    return () => window.removeEventListener('resize', getSize);
  }, [windowSize]);

  const currentlyText = windowSize.width <= 472 ? '' : ', IT’S CURRENTLY';

  return (
    <div className={classes.greeting__container}>
      <img src={props.src} alt="icon" />
      <h2>
        {props.message}
        {currentlyText}
      </h2>
    </div>
  );
}

export default Greeting;
