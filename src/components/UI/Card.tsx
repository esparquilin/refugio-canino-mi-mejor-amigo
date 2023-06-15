import classes from "./Card.module.css";

const Card = (props: any) => {
  return (
    <div className={`${classes.card} ${props.customCard}`}>
      {props.children}
    </div>
  );
};

export default Card;
