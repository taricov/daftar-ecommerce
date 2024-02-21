import { Home, Settings, Shop } from "@mui/icons-material"
import { createBrowserRouter } from "react-router-dom"
import AdminDefalutLayout from "../layouts/DefaultAdmin"
import ShopDefalutLayout from "../layouts/DefaultShop"
import About from "../pages/AdminPages/About"
import Error404 from "../pages/AdminPages/Error404"
import LayoutWrapper from "../layouts"


const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <LayoutWrapper layout={AdminDefalutLayout} component={Home} />
        </>
      ),
    },
    {
      path: "/settings/users",
      element: (
        <>
          <LayoutWrapper layout={AdminDefalutLayout} component={About} />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <LayoutWrapper layout={AdminDefalutLayout} component={About} />
        </>
      ),
    },
    {
      path: "/settings",
      element: (
        <>
          <LayoutWrapper layout={AdminDefalutLayout} component={Settings} />
        </>
      ),
    },
    {
      path: "/shop",
      element: (
        <>
          <LayoutWrapper layout={ShopDefalutLayout} component={Shop} />
        </>
      ),
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ]);
  


  export default router;