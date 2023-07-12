import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="Error">
      <h1>Ops...</h1>
      <p>La pagina che hai richiesto non è stata trovata</p>
    </div>
  );
};

export default Error;
