import { useEffect } from "react";
import { useParams } from "react-router-dom";

//* COMPONENT AND HOOK *//
import { ProductCard, useProduct } from "../";

export const ProductByIdPage: React.FC = () => {
  const { id } = useParams();
  const { product, isLoading } = useProduct({ id: Number(id) });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto</h1>

      {isLoading && "Cargando..."}
      {product && <ProductCard product={product} fullDescription />}
    </div>
  );
};
