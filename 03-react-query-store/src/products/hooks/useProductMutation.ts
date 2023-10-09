import { useMutation, useQueryClient } from "@tanstack/react-query";

import { type IProduct, productActions } from "../";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productActions.createProduct,
    onMutate: (data) => {
      const optimisticProduct: IProduct = { id: Math.random(), ...data };
      queryClient.setQueryData<IProduct[]>(
        ["products", { filterKey: data.category }],
        (old) => {
          return old ? [...old, optimisticProduct] : [optimisticProduct];
        }
      );

      return optimisticProduct;
    },
    onSuccess: (data, _variables, context) => {
      // queryClient.invalidateQueries(["products", { filterKey: data.category }]);

      queryClient.removeQueries(["product", context?.id]);

      queryClient.setQueryData<IProduct[]>(
        ["products", { filterKey: data.category }],
        (old) => {
          if (!old) return [data];

          return old.map((cacheProduct) => {
            return cacheProduct.id === context?.id ? data : cacheProduct;
          });
        }
      );
    },
    onError: (_error, _variables, context) => {
      queryClient.removeQueries(["product", context?.id]);

      queryClient.setQueryData<IProduct[]>(
        ["products", { filterKey: context?.category }],
        (old) => {
          if (!old) return [];

          return old.filter((cacheProduct) => cacheProduct.id !== context?.id);
        }
      );
    },
  });

  return { mutation };
};
