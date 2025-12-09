import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/HomePage";
import Login from "../Pages/Login/LoginPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}