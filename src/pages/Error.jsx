import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  !!error ? console.error(error) : console.error("Pagina non trovata");

  return (
    <div
      className="Error"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Ops...</h1>
      <p>La pagina che hai richiesto non è stata trovata</p>
      <h3 style={{ cursor: "pointer" }}>
        <Link style={{ textDecoration: "none", color: "#353535" }} to="/">
          Torna indietro
        </Link>
      </h3>
    </div>
  );
};

export default Error;
