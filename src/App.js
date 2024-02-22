import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Clothings from "./components/Category/Clothings";
import Grosary from "./components/Category/Grosary";
import Mobiles from "./components/Category/Mobiles";
import Food from "./components/Category/Food";
import AppLayout from "./AppLayout";
import Accessories from "./components/Category/Accessories";
import Electronics from "./components/Category/Electronics";
import Login from "./components/Login";
import Seller from "./components/Category/Seller";
import CardInfo from "./components/Cards/PostCardInfo";
import Carts from "./components/Carts";
import { Suspense, lazy } from "react";
import Shimmer from "./utils/Shimmer";
import DrinksCardInfo from "./components/Cards/DrinksCardInfo";
import FoodCardInfo from "./components/Cards/FoodCardInfo";

const Drinks = lazy(() => import("./components/Category/Drinks"));
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/electronics",
          element: <Electronics />,
        },
        {
          path: "/clothings",
          element: <Clothings />,
        },
        {
          path: "/grosary",
          element: <Grosary />,
        },
        {
          path: "/accessories",
          element: <Accessories />,
        },
        {
          path: "/food",
          element: <Food/>,
        },
        {
          path: "/mobiles",
          element: <Mobiles />,
        },
        {
          path: "/food",
          element: (
            <Suspense fallback={<Shimmer />}>
              <Food />
            </Suspense>
          ),
        },
        {
          path: "/drink",
          element: (
            <Suspense fallback={<Shimmer />}>
              <Drinks />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/cart",
          element: <Carts />,
        },
        {
          path: "/seller",
          element: <Seller />,
        },
        {
          // Dynamic segments /routing
          path: "/drinksCardInfo/:drinkId",
          element: <DrinksCardInfo />,
        },
        {
          path: "/foodCardInfo/:foodId",
          element: <FoodCardInfo />,
        },
        {
          path: "/cardInfo/:postId",
          element: <CardInfo />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
