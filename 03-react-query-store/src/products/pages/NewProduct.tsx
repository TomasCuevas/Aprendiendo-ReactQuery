//* NEXTUI *//
import { Button, Image, Input, Textarea } from "@nextui-org/react";

export const NewProduct: React.FC = () => {
  return (
    <div className="flex-col w-full">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full">
        <div className="flex items-center justify-around">
          <div className="flex-col w-[500px]">
            <Input className="mt-2" type="text" label="Titulo del producto" />
            <Input className="mt-2" type="number" label="Precio del producto" />
            <Input className="mt-2" type="url" label="Url del producto" />
            <Textarea className="mt-2" label="Descripcion del producto" />
            <select className="w-full p-3 mt-2 bg-gray-800 rounded-md">
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
              <option value="jewelery">Jewelery</option>
              <option value="electronics">Electronics</option>
            </select>

            <br />
            <Button className="mt-2" color="primary">
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
