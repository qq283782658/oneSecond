import React, { Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const Login = React.lazy(() => import("../views/Authority/Login"));
const Layout = React.lazy(() => import("../views/Authority/Layout"));

export default function RouterConfig() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: (
        <Suspense fallback={<LoadingOutlined />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/layout",
      element: (
        <Suspense fallback={<LoadingOutlined />}>
          <Layout />
        </Suspense>
      ),
    },
  ]);
}
