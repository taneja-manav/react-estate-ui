
import "./layout.scss";
import HomePage from "./homepage.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import ListPage from "./listpage.jsx";
import Layout from "./layout1.jsx";
import SinglePage from "./singlepage.jsx";
import Profilepage from "./profilepage.jsx";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
    
    {
      path: "/",
      element: <HomePage/>
      
    },
    {
      path: "/list",
      element: <ListPage/>,
    },
    {
      path:"/:id",
      element:<SinglePage/>
    },
    {
      path:"/profile",
      element:<Profilepage/>
    }
      ]
  }
  ]);

  return (

    <RouterProvider router={router}/>
  )
}

export default App