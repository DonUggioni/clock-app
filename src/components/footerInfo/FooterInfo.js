import classes from './FooterInfo.module.scss';

function FooterInfo() {
  return (
    <>
      <footer className={classes.container}>
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
    </>
  );
}

export default FooterInfo;
