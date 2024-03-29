import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard.tsx";
import Visualization from "./pages/visualization.tsx";
import Annotation from "./pages/annotation.tsx";
import DocumentExplorer from "./pages/document-explorer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/visualization",
    element: <Visualization />,
  },
  {
    path: "/annotation",
    element: <Annotation />,
  },
  {
    path: "/document-explorer",
    element: <DocumentExplorer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
