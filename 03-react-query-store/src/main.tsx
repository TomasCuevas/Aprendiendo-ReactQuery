import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

//* PROVIDERS *//
import { TanStackProvider } from "./plugins";

//* ROUTER *//
import { router } from "./router/router.tsx";

//* STYLES *//
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TanStackProvider>
    <NextUIProvider>
      <main className="dark text-foreground bg-background">
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </TanStackProvider>
);
