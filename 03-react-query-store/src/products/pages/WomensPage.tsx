import { ProductList, useProducts } from "../";

export const WomensPage: React.FC = () => {
  const { isLoading, products } = useProducts({
    filterKey: "women's clothing",
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      {isLoading && "Cargando..."}
      <ProductList products={products} />
    </div>
  );
};
