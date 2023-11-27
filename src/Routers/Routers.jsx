import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Classes from "../Pages/Classes/Classes";
import Trainer from "../Pages/Trainer/Trainer";
import Gallery from "../Pages/Gallery/Gallery";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
 

const router= createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"/classes",
            element:<Classes></Classes>
          },
          {
            path:"/trainer",
            element:<Trainer></Trainer>
          },
          {
            path:"/gallery",
            element:<Gallery></Gallery>
          },
          {
            path:"/about",
            element:<About></About>
          },
          {
            path:"/login",
            element:<Login></Login>
          },
          {
            path:"/signup",
            element:<Signup></Signup>
          }
        ]
      }
])
export default router;