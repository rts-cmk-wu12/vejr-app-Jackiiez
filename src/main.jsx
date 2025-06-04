import { useState } from "react";
import { createRoot } from 'react-dom/client'
import { GloabelContext } from "./gloabelContext";
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Search from "./componets/search.jsx";
import Weather from "./componets/wether.jsx";
import Details from "./componets/wether-details.jsx";





//router hvor vi putter komponenter ind og laver flere sider
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
   {
    path:"/vejr/:by",
    element: <Details />
  },
  //  {
  //   path: "/",
  //   element: <Search />
  // },
])
//vi laver et state som vi ka gemme i vores context
const MyProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  return <GloabelContext.Provider value={{ color, setColor }}>{children}</GloabelContext.Provider>;
};






createRoot(document.getElementById('root')).render(



  //vi putter vores context rundt om vores projekt
  <MyProvider>
    <RouterProvider router={router} />
  </MyProvider>



)
