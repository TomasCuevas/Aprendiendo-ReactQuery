import { Controller, SubmitHandler, useForm } from "react-hook-form";

//* NEXTUI *//
import { Button, Image, Input, Textarea } from "@nextui-org/react";

interface FormInputs {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const NewProduct: React.FC = () => {
  const { control, handleSubmit } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

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
                  onChange={field.onChange}
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

            <Button type="submit" className="w-full" color="primary">
              Crear
            </Button>
          </div>

          <div
            className="flex items-center p-10 bg-white rounded-2xl"
            style={{
              width: "500px",
              height: "600px",
            }}
          >
            <Image src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" />
          </div>
        </div>
      </form>
    </div>
  );
};
