import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/Profile";
import PageLayout from "./layouts/PageLayout";

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/user/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;
