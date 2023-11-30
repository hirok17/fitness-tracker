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
import TrainerInfo from "../Pages/Trainer/component/TrainerInfo";
import Dashboard from "../Dashboard/Dashboard";
import Subscribe from "../Dashboard/component/Subscribe";
import Trainers from "../Dashboard/component/Trainers";
import AllUser from "../Dashboard/component/AllUser";
import PrivetOut from "../Authprovider/PrivetRout/PrivetOut";
import Forum from "../Pages/Forum/Forum";
 

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
          },
          {
            path:"/trainer/:id",
            element:<TrainerInfo></TrainerInfo>,
            loader:({params})=>fetch(`https://fitness-server-zeta.vercel.app/trainer/${params.id}`)
          },
          {
            path:"/forum",
            element:<Forum></Forum>
          }
        ]
      },
      {
        path:"dashboard",
        element:<PrivetOut><Dashboard></Dashboard></PrivetOut>,
        children:[
          {
            path:"subscribe",
            element:<Subscribe></Subscribe>
          },
          {
            path:"trainers",
            element:<Trainers></Trainers>
          },
          {
            path:"alluser",
            element:<AllUser></AllUser>
          }
        ]
      }
])
export default router;