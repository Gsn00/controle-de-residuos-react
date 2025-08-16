import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Edicao from "./pages/Edicao/Edicao.jsx";

const categorias = ["Roupa", "Comum", "Infectante", "Reciclável", "Perfuro"];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App categorias={categorias} />,
  },
  {
    path: "/editar",
    element: <Edicao categorias={categorias} />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
