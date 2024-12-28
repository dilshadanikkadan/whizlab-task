import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";
import InventoryScreen from "../pages/InventoryScreen";


/*
routing with createborwser router 
high recommendation from react -router-dom
helps us to manage easly routes
*/
const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
    <HomeScreen/>
    ),
  },

  {
    path: "/all-inventories",
    element: (
     <InventoryScreen/>
    ),
  },
  {
    path: "/:id",
    element: <div />,
  },
]);

const Allrouter = () => {
  return <RouterProvider router={AllRoutes} />;
};

export default Allrouter;