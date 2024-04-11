import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/Profile";
import PageLayout from "./layouts/PageLayout";
import useAuthStore from "./store/authStore";

const App = () => {
  const authUser = useAuthStore((state) => state.user);
  return (
    <PageLayout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route path="/user/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
