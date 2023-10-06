import { useQuery } from "@tanstack/react-query";

//* SERVICES *//
import { productActions } from "../";

//* OPTIONS *//
interface Options {
  id: number;
}

export const useProduct = ({ id }: Options) => {
  const {
    error,
    isError,
    isLoading,
    data: product,
  } = useQuery(["product", id], () => productActions.getProductById(id));

  return {
    error,
    isError,
    isLoading,
    product,
  };
};
