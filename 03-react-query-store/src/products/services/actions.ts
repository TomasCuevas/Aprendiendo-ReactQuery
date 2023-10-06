import { type IProduct, productsApi } from "../";

interface getProductsProps {
  filterKey?: string;
}

export const getProducts = async ({ filterKey }: getProductsProps) => {
  const { data } = await productsApi.get<IProduct[]>("/products");
  return data;
};
