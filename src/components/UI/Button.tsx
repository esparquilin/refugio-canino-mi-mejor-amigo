import classes from "./Button.module.css";

const Button = (props: any) => {
  return (
    <button
      disabled={props.disabled}
      type={props.submit}
      onClick={props.onClick}
      className={`props.className ? ${classes.button} ${props.customButton} : ${classes.button}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
