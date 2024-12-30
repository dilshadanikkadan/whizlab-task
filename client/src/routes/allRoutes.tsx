  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import HomeScreen from "../pages/HomeScreen";
  import InventoryScreen from "../pages/InventoryScreen";
  import ErrorBoundary from "../utils/ErrorBoundary";
import NotFound from "../utils/NotFound";

  /*
  routing with createborwser router 
  high recommendation from react -router-dom
  helps us to manage easly routes
  */
  const AllRoutes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <HomeScreen />
        </ErrorBoundary>
      ),
    },

    {
      path: "/all-inventories",
      element: (
        <ErrorBoundary>
          <InventoryScreen />,
        </ErrorBoundary>
      ),
    },
    {
      path: "*",  
      element: <NotFound />,
    },
  ]);

  const Allrouter = () => {
    return <RouterProvider router={AllRoutes} />;
  };

  export default Allrouter;
