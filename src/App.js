import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageLayout from "./HomePageLayout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageLayout/>
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
