import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu"
import ShimmerUI from "./components/ShimmerUI";


/**
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * lazy loading
 * on demand loading
 * dynamic import
 */

const Grocery = lazy(()=>import("./components/Grocery"))

const About = lazy(()=>import("./components/About"))


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement:<Error />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<Suspense fallback={<ShimmerUI />}><About /></Suspense>
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>jsnxjs</h1>}><Grocery /></Suspense>
      },
      {
        path:"/restaurants/:resID",
        element:<RestaurantMenu />
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


