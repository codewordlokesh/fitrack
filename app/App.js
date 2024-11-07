import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./login/page"; // Import the login page as LoginPage
import PublicPage from "./public/page"; // Import the public page as PublicPage
import Home from "./home/page"
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          { <><Route index element={<LoginPage />} /><Route path="/login" element={<LoginPage />} /><Route path="/home" element={<Home />} /></>}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
