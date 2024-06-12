import { Routes, Route } from "react-router-dom";
import PageLink from "./PageLink";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/signup/SignUp";
import { AuthProvider } from "../../context/AuthContext";
import MediaPage from "../pages/media/MediaPage";
import ProtectedRoute from "../../ProtectedRoute";
import UploadFile from "../pages/upload/UploadFile";

const PageRoutes = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" exact element={<Home />} />
            <Route path="/movies/:movieTitle" element={<MediaPage />} />
            <Route path="/upload" element={<UploadFile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default PageRoutes;
