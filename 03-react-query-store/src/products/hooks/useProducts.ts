import { useQuery } from "@tanstack/react-query";
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
  } = useQuery(["products", { filterKey }], () =>
    productActions.getProducts({ filterKey })
  );

  return {
    error,
    isError,
    isLoading,
    products: products || [],
  };
};
