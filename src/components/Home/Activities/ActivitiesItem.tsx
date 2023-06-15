import React, { useEffect, useState } from "react";
import classes from "./ActivitiesItem.module.css";

//Icons
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

interface ActivitiesItemProps {
  activities: {
    url: string;
    title: string;
    text: string;
  }[];
}

const ActivitiesItem = ({ activities }: ActivitiesItemProps) => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = currIndex === activities.length - 1 ? 0 : currIndex + 1;

      setCurrIndex(newIndex);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, [currIndex, activities.length]);

  const goToPrevious = () => {
    const newIndex = currIndex === 0 ? activities.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currIndex === activities.length - 1 ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const goToActivitie = (activitieIndex: number) => {
    setCurrIndex(activitieIndex);
  };

  return (
    <div className={classes["slider"]}>
      <BsFillArrowLeftCircleFill
        className={`${classes.icon} ${classes.left}`}
        onClick={goToPrevious}
      />
      <BsFillArrowRightCircleFill
        className={`${classes.icon} ${classes.right}`}
        onClick={goToNext}
      />

      <div className={classes.content}>
        <div
          className={classes["image"]}
          style={{ backgroundImage: `url(${activities[currIndex].url})` }}
        ></div>

        <div className={classes["text-content"]}>
          <h2 className={classes.title}>{activities[currIndex].title}</h2>
          <p className={classes.text}> {activities[currIndex].text}</p>
        </div>
      </div>

      <div className={classes.dots}>
        {activities.map((_, activitieIndex) => (
          <GoPrimitiveDot
            className={`${classes.dot} ${
              activitieIndex === currIndex ? classes.selectedDot : ""
            }`}
            key={activitieIndex}
            onClick={() => goToActivitie(activitieIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesItem;
