import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";
import Error from "./pages/Error.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import BoardPage from "./pages/boardPage/BoardPage.jsx";
import "./index.scss";
import BranchPage from "./pages/branchPage/BranchPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="pippo" element={<h1>PIPPO</h1>} />
        <Route path="dashboard" element={<BoardPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="prodotti" element={<h1>Pagina dei prodotti</h1>} />
        <Route path="filiali/:name" element={<BranchPage />} />
      </Route>
      <Route path="*" element={<Error />} /> {/* For ERROR */}
    </Route>
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
