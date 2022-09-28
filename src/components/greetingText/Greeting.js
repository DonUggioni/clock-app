import classes from '../mainInfo/MainInfoContainer.module.scss';

function Greeting(props) {
  return (
    <div className={classes.greeting__container}>
      <img src={props.src} alt="icon" />
      <h2>{props.message}, IT’S CURRENTLY</h2>
    </div>
  );
}

export default Greeting;
