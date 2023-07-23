import { useState, useEffect } from "react";

import { allDogsData } from "../interfaces/dogInterfaces";

const useFetchAllPerritos = (
  page: number,
  filterSize: String,
  sortBy: string,
  apiURL: string | undefined
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<allDogsData>();
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    const fetchDogDescription = async () => {
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

    fetchDogDescription();
  }, [page, filterSize, sortBy, apiURL]);

  return { isLoading, data, pageNumbers };
};

export default useFetchAllPerritos;
