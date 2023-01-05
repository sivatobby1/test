import * as React from "react";
import routes from "./RouteConstants";
import PrivateRoute from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import CommonRoute from "./CommonRoute";
import { Stack } from "@mui/material";


function Router() {


  return (
    <Suspense
      fallback={
        <Stack
          direction={"row"}
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* <Spinner /> */}
        </Stack>
      }
    >
      <Routes>
        {routes.map(
          (
            { element: Component, path, isAuthenticated, isCommon, ...rest },
            i
          ) => {
            return (
              <Route
                {...rest}
                path={path}
                element={
                  isCommon ? (
                    <Component />
                  ) : isAuthenticated ? (
                    <PrivateRoute path={path}>
                      <Component />
                    </PrivateRoute>
                  ) : (
                    <CommonRoute path={path}>
                      {" "}
                      <Component />
                    </CommonRoute>
                  )
                }
              />
            );
          }
        )}
      </Routes>
    </Suspense>
  );
}

export default Router;
