import { Routes, Route } from "react-router-dom";
import PageLink from "./PageLink";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const PageRoutes = () => {
  return (
    <div>
      {/* <PageLink /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default PageRoutes;
