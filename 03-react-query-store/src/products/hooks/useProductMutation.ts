import { useMutation, useQueryClient } from "@tanstack/react-query";

//* SERVICES *//
import { productActions } from "../";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["products", { filterKey: data.category }]);
    },
  });

  return { mutation };
};
