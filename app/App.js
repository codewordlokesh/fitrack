import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./login/page"; // Import the login page
import PublicPage from "./public/page"; // Import the public page
import Home from "./home/page"; // Import the home page

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Defining all routes */}
        <Route path="/" element={<LoginPage />} /> {/* Default route */}
        <Route path="/login" element={<LoginPage />} /> {/* Login route */}
        <Route path="/home" element={<Home />} /> {/* Home route */}
      </Routes>
    </BrowserRouter>
  );
}
