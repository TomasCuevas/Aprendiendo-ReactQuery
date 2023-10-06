import { type IProduct, productsApi } from "../";

interface getProductsProps {
  filterKey?: string;
}

export const getProducts = async ({ filterKey }: getProductsProps) => {
  const filterUrl = filterKey ? `category=${filterKey}` : "";

  const { data } = await productsApi.get<IProduct[]>(`/products?${filterUrl}`);
  return data;
};
