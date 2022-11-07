import { useQuery } from "@tanstack/react-query";
import "./App.css";

const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  );
  const numberString = await res.text();

  return Number(numberString);
};

export const App = () => {
  const { isError, data, error, refetch, isFetching } = useQuery(
    ["randomNumber"],
    () => getRandomNumberFromApi()
  );

  return (
    <div className="App App-header">
      {isFetching ? (
        <h2>Cargando...</h2>
      ) : !isError ? (
        <h2>Numero aleatorio: {data}</h2>
      ) : null}

      {!isFetching && isError ? <h3>{`${error}`}</h3> : null}

      <button onClick={() => refetch()} disabled={isFetching}>
        Nuevo numero
      </button>
    </div>
  );
};
