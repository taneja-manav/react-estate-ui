
import "./layout.scss";
import HomePage from "./homepage.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import ListPage from "./listpage.jsx";
import Layout from "./layout1.jsx";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
    
    {
      path: "/",
      element: (
       <HomePage/>
      ),
    },
    {
      path: "/list",
      element: <ListPage/>,
    },
      ]
  }
  ]);

  return (

    <RouterProvider router={router}/>
  )
}

export default App