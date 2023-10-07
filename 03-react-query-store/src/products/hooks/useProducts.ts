import { useQuery } from "@tanstack/react-query";

//* SERVICES *//
import { productActions } from "../";

//* OPTIONS *//
interface Options {
  filterKey?: string;
}

export const useProducts = ({ filterKey }: Options) => {
  const {
    error,
    isError,
    isLoading,
    data: products,
  } = useQuery(
    ["products", { filterKey }],
    () => productActions.getProducts({ filterKey }),
    { staleTime: 1000 * 60 * 60 }
  );

  return {
    error,
    isError,
    isLoading,
    products: products || [],
  };
};
