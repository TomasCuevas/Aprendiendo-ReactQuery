//* NEXTUI *//
import { Card, Image } from "@nextui-org/react";

export const ProductCard: React.FC = () => {
  return (
    <Card className="relative flex flex-col max-w-xs p-3 mx-auto space-y-3 bg-white border border-white shadow-lg md:flex-row md:space-x-5 md:space-y-0 rounded-xl md:max-w-3xl">
      <div className="grid w-full bg-white md:w-1/3 place-items-center">
        <Image
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          alt="tailwind logo"
          width={300}
          height={400}
          className="p-5 bg-white rounded-xl sm:p-0"
        />
      </div>
      <div className="flex flex-col w-full p-3 space-y-2 bg-white md:w-2/3">
        <div className="flex justify-between item-center">
          <p className="hidden font-medium text-gray-500 md:block">Vacations</p>
        </div>
        <h3 className="text-xl font-black text-gray-800 md:text-2xl">
          The Majestic and Wonderful Bahamas
        </h3>

        <p className="text-base text-gray-500 md:text-lg">
          The best kept secret of The Bahamas is the country’s sheer size and
          diversity. With 16 major islands, The Bahamas is an unmatched
          destination
        </p>

        <p className="text-xl font-black text-gray-800">
          $110
          <span className="text-base font-normal text-gray-600">
            {" "}
            +impuesto
          </span>
        </p>
      </div>
    </Card>
  );
};
