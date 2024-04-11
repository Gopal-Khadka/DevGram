import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/Profile";
import PageLayout from "./layouts/PageLayout";
import { useAuthState } from "react-firebase-hooks/auth";
import { fireAuth } from "./firebase/firebase";

const App = () => {
  const [authUser] = useAuthState(fireAuth); // know if the user is logged in or not from the firebase
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
