import classes from "./PerritosPagination.module.css";
import Button from "../../UI/Button";
import React from "react";
import { allDogsData } from "../../../interfaces/dogInterfaces";

interface perritosPaginationProps {
  data: allDogsData | undefined;
  page: number;
  prevPage: () => void;
  curPage: number;
  nextPage: () => void;
  pageButtons: any[];
  setPage: any;
  setCurPage: any;
}

const PerritosPagination: React.FC<perritosPaginationProps> = ({
  data,
  pageButtons,
  page,
  prevPage,
  curPage,
  setPage,
  setCurPage,
  nextPage,
}) => {
  return (
    <div className={classes.pagination}>
      <Button
        disabled={page === 1}
        customButton={`${classes["button-class"]} ${classes["prev"]}`}
        onClick={prevPage}
      >
        Anterior
      </Button>
      <ol className={classes.pages}>
        {pageButtons.map((_: any, i: number) => (
          <li key={i + 1}>
            <Button
              style={
                i === curPage
                  ? {
                      backgroundColor: "blue",
                    }
                  : {}
              }
              customButton={`${
                i === curPage
                  ? `${classes["current-page"]} ${classes["button-class"]}`
                  : `${classes["button-class"]}`
              }`}
              onClick={() => {
                if (i + 1 === page) {
                  return;
                }

                window.scrollTo(0, 0);
                setPage(i + 1);
                setCurPage(i);
              }}
            >
              {i + 1}
            </Button>
          </li>
        ))}
      </ol>
      <Button
        disabled={page === data!.pagination.totalPages}
        customButton={`${classes["button-class"]} ${classes["next"]}`}
        onClick={nextPage}
      >
        Siguiente
      </Button>
    </div>
  );
};

export default PerritosPagination;
