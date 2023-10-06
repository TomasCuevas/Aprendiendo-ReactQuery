import { type IProduct, productsApi } from "../";

interface getProductsProps {
  filterKey?: string;
}

export const getProducts = async ({ filterKey }: getProductsProps) => {
  const filterUrl = filterKey ? `category=${filterKey}` : "";

  const { data } = await productsApi.get<IProduct[]>(`/products?${filterUrl}`);
  return data;
};

export const getProductById = async (productId: number) => {
  const { data } = await productsApi.get<IProduct>(`/products/${productId}`);
  return data;
};
