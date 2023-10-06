//* COMPONENTS *//
import { type IProduct, ProductCard } from "../";

//* PROPS *//
interface Props {
  products: IProduct[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid justify-center grid-cols-1 gap-2 mt-2 sm:grid-cols-2 xl:grid-cols-3 max-w-max">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
