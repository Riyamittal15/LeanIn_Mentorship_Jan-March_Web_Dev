import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <div className={classes.button}>
      <button className={classes.submit_button} type={props.type} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;