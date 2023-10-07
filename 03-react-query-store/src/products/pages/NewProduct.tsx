import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

//* NEXTUI *//
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { productActions } from "..";

interface FormInputs {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const NewProduct: React.FC = () => {
  const mutation = useMutation({
    mutationFn: productActions.createProduct,
  });

  const { control, handleSubmit, watch } = useForm<FormInputs>({
    defaultValues: {
      category: "men's clothing",
      description:
        "Esta nueva camiseta titular de Boca Juniors adidas une la pasión y el barrio con diferentes tonos que logran un efecto visual y una prominente franja central que resaltan sus colores, el azul y oro.Un diseño innovador para un equipo en constante evolución. Su tejido ligero, los modernos paneles de mesh y la tecnología de absorción AEROREADY se combinan para mantener cómodos a los hinchas del club.",
      image:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/57d46a83396a46268447a7bb4a751909_9366/Camiseta_Titular_Boca_Juniors_23-24_Azul_HT3697_01_laydown.jpg",
      price: 32_000,
      title: "Camiseta Oficial de Boca Juniors",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    mutation.mutate(data);
  };

  const newImage = watch("image");

  return (
    <div className="flex-col w-full">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-around">
          <div className="flex-col w-[500px] gap-2 flex">
            <Controller
              control={control}
              name="title"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  type="text"
                  value={field.value}
                  onChange={field.onChange}
                  label="Titulo del producto"
                />
              )}
            />
            <Controller
              control={control}
              name="price"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  value={String(field.value)}
                  onChange={(event) =>
                    field.onChange(Number(event.target.value))
                  }
                  type="number"
                  label="Precio del producto"
                />
              )}
            />
            <Controller
              control={control}
              name="image"
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  type="url"
                  value={field.value}
                  onChange={field.onChange}
                  label="Url del producto"
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea
                  value={field.value}
                  onChange={field.onChange}
                  label="Descripcion del producto"
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full p-3 bg-gray-800 rounded-md"
                >
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>
              )}
            />

            <Button
              isDisabled={mutation.isLoading}
              type="submit"
              className="w-full uppercase"
              color="primary"
            >
              Crear
            </Button>
          </div>

          <div className="flex items-center p-10 bg-white rounded-2xl w-[500px] h-[600px]">
            <Image src={newImage} className="object-cover w-full h-full " />
          </div>
        </div>
      </form>
    </div>
  );
};
