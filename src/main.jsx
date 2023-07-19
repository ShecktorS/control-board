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
import ProductsPage from "./pages/productsPage/ProductsPage.jsx";
import BranchProductPage from "./pages/branchProductPage/BranchProductPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route path="pippo" element={<h1>PIPPO</h1>} />
        <Route path="dashboard" element={<BoardPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="prodotti" element={<ProductsPage />} />
        <Route path="filiali/:name" element={<BranchPage />} />
        <Route
          path="filiali/:name/prodotti/:id"
          element={<BranchProductPage />}
        />
        <Route
          path="aiuto"
          element={
            <div
              style={{
                height: "80vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <h2>
                Per problemi al database contatta il numero{" "}
                <span style={{ color: "#5a57ff", cursor: "pointer" }}>
                  3273283228
                </span>
              </h2>
            </div>
          }
        />
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
