import { useEffect, useState } from "react";
import "./App.css";

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await res.text();

  return Number(numberString);
};

export const App = () => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    getRandomNumberFromApi().then((num) => setNumber(num));
  }, []);

  return (
    <div className="App App-header">
      <h2>Numero aleatorio: {number}</h2>
    </div>
  );
};
