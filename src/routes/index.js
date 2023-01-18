import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { routesPrivate } from "./routesPrivate";
import { routesPublic } from "./routesPublic";
//en la nueva version nse utiliza createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",//la ruta
    element: <App />,//lo que se renderiza
    children: [...routesPublic, ...routesPrivate]//las rutas a las que hace referencia en este caso modularizado
  }
]);

export const ProviderRouter = () => <RouterProvider router={router} />