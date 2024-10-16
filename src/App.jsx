
import "./layout.scss";
import HomePage from "./homepage.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import ListPage from "./listpage.jsx";



function App() {

  const router = createBrowserRouter([
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
  ]);

  return (
    // <div className="layout">
    //   <div className="navbar">
    //   <Navbar/>
    //   </div>
    //   <div className="content">
    //   <HomePage/>
    //   </div>
    // </div>

    <RouterProvider router={router}/>
  )
}

export default App