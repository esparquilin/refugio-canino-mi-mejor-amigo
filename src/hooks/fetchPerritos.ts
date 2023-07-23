import { useState, useEffect } from "react";

import { allDogsData, dogData } from "../interfaces/dogInterfaces";
//react hook
export const useFetchAllPerritos = (
  apiURL: string | undefined,
  page: number,
  filterSize: String,
  sortBy: string
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

export const useFetchSingleDog = (
  apiURL: String | undefined,
  perro: String | undefined
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dogDescription, setDogDescription] = useState<dogData | null>(null);

  useEffect(() => {
    const fetchDogDescription = async () => {
      const response = await fetch(`${apiURL}/${perro}`);

      const { data } = await response.json();

      setDogDescription(data);
      setIsLoading(false);
    };

    fetchDogDescription();
  }, [perro, apiURL]);

  return { isLoading, dogDescription };
};
