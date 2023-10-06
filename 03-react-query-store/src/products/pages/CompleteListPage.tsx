//* COMPONENTS *//
import { ProductList, useProducts } from "../";

export const CompleteListPage: React.FC = () => {
  const { products, isLoading } = useProducts({});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {isLoading && "Cargando..."}
      <ProductList />
    </div>
  );
};
