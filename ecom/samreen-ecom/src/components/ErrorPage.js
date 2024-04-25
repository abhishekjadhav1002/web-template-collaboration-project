import { useRouteError } from "react-router-dom";
import jpg from "../assets/404.jpg"

const ErrorPage = () => {
    const err=useRouteError();
  return (
    <>
      <div className="error">
      <img src={jpg} />
      </div>
    </>
  )
}

export default ErrorPage;
