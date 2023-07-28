import { useState, useEffect } from "react";
import { allDogsData, dogData } from "../interfaces/dogInterfaces";

export const useAllPerritos = ({
  apiURL,
  page,
  filterSize,
  sortBy,
}: {
  apiURL: string | undefined;
  page: number;
  filterSize: string;
  sortBy: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<allDogsData>();
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchDogDescription = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${apiURL}/?page=${page}&sort=${sortBy}&size=${filterSize}`,
          { signal: controller.signal }
        );

        const { data } = await response.json();

        setData(data);
        setPageNumbers(
          Array.from(
            { length: data!.pagination!.totalPages },
            (_: any, i: number) => i
          )
        );
      } catch (e) {
        throw new Error("Algo malo ocurrio");
      } finally {
        setIsLoading(false);
      }

      return () => {
        controller.abort("Abortado");
      };
    };

    fetchDogDescription();
  }, [page, filterSize, sortBy, apiURL]);

  return { isLoading, data, pageNumbers };
};

export const useSingleDog = ({
  apiURL,
  perro,
}: {
  apiURL: String | undefined;
  perro: String | undefined;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dogDescription, setDogDescription] = useState<dogData | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchDogDescription = async () => {
      const response = await fetch(`${apiURL}/${perro}`, {
        signal: controller.signal,
      });

      const { data } = await response.json();

      setDogDescription(data);
      setIsLoading(false);
    };

    fetchDogDescription();

    return () => {
      controller.abort();
    };
  }, [perro, apiURL]);

  return { isLoading, dogDescription };
};
