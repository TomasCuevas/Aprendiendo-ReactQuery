//* COMPONENTS *//
import { ProductList } from "../";

export const CompleteListPage: React.FC = () => {
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      <ProductList />
    </div>
  );
};
