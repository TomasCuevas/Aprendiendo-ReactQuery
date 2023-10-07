import { useMutation } from "@tanstack/react-query";

//* SERVICES *//
import { productActions } from "../";

export const useProductMutation = () => {
  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onSuccess: () => {
      console.log("Producto creado.");
    },
  });

  return { mutation };
};
