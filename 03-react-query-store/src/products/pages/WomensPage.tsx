//* COMPONENTS *//
import { ProductList } from "../";

export const WomensPage: React.FC = () => {
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      <ProductList />
    </div>
  );
};
