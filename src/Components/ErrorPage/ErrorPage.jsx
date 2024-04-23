import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="min-h-[80vh] space-y-4 items-center">
       <h1 className="text-5xl">Oops!</h1>
       <p className="text-3xl">Page Not Found| {error.status}</p>
    </div>
  );
};

export default ErrorPage;