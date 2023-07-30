import classes from "./IsLoading.module.css";
import { VscLoading } from "react-icons/vsc";

const IsLoading = () => {
  return (
    <>
      <div className={classes.background} />
      <VscLoading className={classes.loading} />
    </>
  );
};

export default IsLoading;
