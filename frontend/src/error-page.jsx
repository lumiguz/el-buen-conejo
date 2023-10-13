import { useRouteError } from "react-router-dom";

/**
 * Renders an error page with a specific error message.
 *
 * @return {JSX.Element} The rendered error page component.
 */
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage = "";
  if (error.statusText === "Not Found") {
    errorMessage = "Página no encontrada";
  } else {
    errorMessage =
      "Ha ocurrido un error inesperado, ya estamos trabajando para solucionarlo.";
  }

  return (
    <div
      id="error-page"
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <div className="text-center">
        <h1 className="display-1">Oops!</h1>
        <p className="lead">{errorMessage}</p>
        <p className="text-muted">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
