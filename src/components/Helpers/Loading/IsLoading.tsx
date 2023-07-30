import classes from "./IsLoading.module.css";
import { VscLoading } from "react-icons/vsc";

const IsLoading = () => {
  return (
    <>
      <div className={classes.background} />
      <div className={classes["loading-icon-container"]}>
        <VscLoading className={classes["loading-icon"]} />
      </div>
    </>
  );
};

export default IsLoading;
