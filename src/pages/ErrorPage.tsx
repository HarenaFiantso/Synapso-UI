import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.log(error);

  return (
    <div>
      <h1>Very ndray nju a !</h1>
      <p>Misy diso lesy ny URL anlah a</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
