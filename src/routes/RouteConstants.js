import React from "react";
import Home from '../../src/pages/Home/Home'
import PageOne from "../pages/PageOne";
import PageThree from "../pages/PageThree";
import PageTwo from "../pages/PageTwo";



const routes = [
  {
    path: '/',
    exact: false,
    element: Home,
    isAuthenticated: false,
    // isCommon: true
  },
  {
    path: '/page-one',
    exact: false,
    element: PageOne,
    isAuthenticated: false,
    // isCommon: true
  },
  {
    path: '/page-two',
    exact: false,
    element: PageTwo,
    isAuthenticated: false,
    // isCommon: true
  },
  {
    path: '/page-three',
    exact: false,
    element: PageThree,
    isAuthenticated: false,
    // isCommon: true
  },
];

export default routes;
