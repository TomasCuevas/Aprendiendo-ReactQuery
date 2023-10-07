import { Controller, SubmitHandler, useForm } from "react-hook-form";

//* NEXTUI *//
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

interface FormInputs {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const NewProduct: React.FC = () => {
  const [tempImage, setTempImage] = useState("");

  const { control, handleSubmit, watch } = useForm<FormInputs>({
    defaultValues: {
      category: "men's clothing",
      description: "",
      image: "",
      price: 0,
      title: "",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
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

            <Button type="submit" className="w-full" color="primary">
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
