import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageLayout from "./HomePageLayout";
import { AuthContextProvider } from "./context/authContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthContextProvider>
          <HomePageLayout />
        </AuthContextProvider>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        {
          path: "/account",
          element: (
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
