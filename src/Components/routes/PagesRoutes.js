import { Routes, Route } from "react-router-dom";
import PageLink from "./PageLink";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/login/signup/SignUp";
import { AuthProvider } from "../../context/AuthContext";

const PageRoutes = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default PageRoutes;
