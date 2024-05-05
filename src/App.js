import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageLayout from "./HomePageLayout";
import { AuthContextProvider } from "./context/authContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthContextProvider>
          <HomePageLayout />
        </AuthContextProvider>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
