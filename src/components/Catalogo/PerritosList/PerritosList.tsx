import React, { useState, useEffect } from "react";
import Wrapper from "../../Helpers/Wrapper";

import perrito from "../../../assets/images/no-perritos.jpg";

import classes from "./PerritosList.module.css";

import IsLoading from "../../Helpers/isLoading";
import FilterPerritos from "./FilterPerritos";
import PerritosCards from "./PerritosCards";
import PerritosPagination from "./PerritosPagination";
import { allDogsData } from "../../../interfaces/dogInterfaces";

const PerritosList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [curPage, setCurPage] = useState(0);
  const [data, setData] = useState<allDogsData>();
  const [page, setPage] = useState(1);
  const [sizeData, setSizeData] = useState({
    xs: true,
    s: true,
    m: true,
    l: true,
    xl: true,
  });
  const [showForm, setShowForm] = useState(false);

  const [sortBy, setSortBy] = useState("dogName");
  const [filterSize, setFilterSize] = useState("");

  const apiURL = process.env.REACT_APP_API_URL;

  const onChangeSizeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setSizeData((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
  };

  const onSumbitHandler = (event: any) => {
    window.scrollTo(0, 0);
    event.preventDefault();
    setShowForm(true);
    setPage(1);

    let filter: Array<any> = [];
    for (const size in sizeData) {
      if (
        sizeData.hasOwnProperty(size) &&
        sizeData[size as keyof typeof sizeData]
      ) {
        filter = [size, ...filter];
      }
    }

    setFilterSize(filter.join("&size="));
    setSortBy(event.target.sortBy.value);
  };

  useEffect(() => {
    const loadPerritos = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${apiURL}/?page=${page}&sort=${sortBy}&size=${filterSize}`
      );

      const { data } = await response.json();

      setData(data);
      setPageNumbers(
        Array.from(
          { length: data!.pagination!.totalPages },
          (_: any, i: number) => i
        )
      );
      setIsLoading(false);
    };

    loadPerritos();
  }, [page, filterSize, sortBy, apiURL]);

  const prevPage = () => {
    setCurPage((prev) => prev - 1);
    setPage((prev) => {
      if (prev > 1) {
        window.scrollTo(0, 0);
        return prev - 1;
      } else return 1;
    });
  };

  const nextPage = () => {
    setCurPage((prev) => prev + 1);
    setPage((prev) => {
      if (prev < data!.pagination.totalPages) {
        window.scrollTo(0, 0);
        return prev + 1;
      } else return data!.pagination.totalPages;
    });
  };

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <>
      <Wrapper>
        <FilterPerritos
          setShowForm={setShowForm}
          showForm={showForm}
          sortBy={sortBy}
          onSumbitHandler={onSumbitHandler}
          onChangeSizeData={onChangeSizeData}
          sizeData={sizeData}
        />
        {data!.allDogs.length > 0 ? (
          <PerritosCards data={data} />
        ) : (
          <div className={classes["no-perritos"]}>
            <h2>No se encontraron perritos con esas caracteristicas 🥲</h2>
            <p>Intente con otros filtros</p>
            <img alt="perrito" src={perrito} />
          </div>
        )}

        <PerritosPagination
          pageButtons={pageNumbers}
          data={data}
          page={page}
          prevPage={prevPage}
          curPage={curPage}
          setPage={setPage}
          setCurPage={setCurPage}
          nextPage={nextPage}
        />
      </Wrapper>
    </>
  );
};

export default PerritosList;
