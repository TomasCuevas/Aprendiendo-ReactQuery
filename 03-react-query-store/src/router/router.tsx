import { createBrowserRouter } from "react-router-dom";

//* PAGES *//
import {
  CompleteListPage,
  MensPage,
  NewProduct,
  StoreLayout,
  WomensPage,
} from "../products";

//* ERROR PAGE *//
import { ErrorPage } from "../ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CompleteListPage />,
      },
      {
        path: "men",
        element: <MensPage />,
      },
      {
        path: "women",
        element: <WomensPage />,
      },
      {
        path: "new",
        element: <NewProduct />,
      },
    ],
  },
  {},
]);
