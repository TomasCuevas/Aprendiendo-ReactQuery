import { useMutation, useQueryClient } from "@tanstack/react-query";

import { type IProduct, productActions } from "../";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onSuccess: (data) => {
      // queryClient.invalidateQueries(["products", { filterKey: data.category }]);

      queryClient.setQueryData<IProduct[]>(
        ["products", { filterKey: data.category }],
        (old) => {
          return old ? [...old, data] : [data];
        }
      );
    },
  });

  return { mutation };
};
