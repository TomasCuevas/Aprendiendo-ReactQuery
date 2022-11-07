//* styles *//
import "./App.css";

//* hooks *//
import { useRandom } from "./hooks/useRandom";

export const App = () => {
  const { isFetching, isError, data, error, refetch } = useRandom();

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
