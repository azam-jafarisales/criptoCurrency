import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./pages/routes";

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} >
    
  </RouterProvider>;

}

export default App;




