import { type IProduct, type IProductPayload, productsApi } from "../";

interface getProductsProps {
  filterKey?: string;
}

const sleep = async (seconds: number) => {
  await setTimeout(() => {}, seconds * 1000);
};

export const getProducts = async ({ filterKey }: getProductsProps) => {
  const filterUrl = filterKey ? `category=${filterKey}` : "";

  const { data } = await productsApi.get<IProduct[]>(`/products?${filterUrl}`);
  return data;
};

export const getProductById = async (productId: number) => {
  const { data } = await productsApi.get<IProduct>(`/products/${productId}`);
  return data;
};

export const createProduct = async (newProductData: IProductPayload) => {
  await sleep(5);

  const { data } = await productsApi.post<IProduct>(
    "/products",
    newProductData
  );

  return data;
};
