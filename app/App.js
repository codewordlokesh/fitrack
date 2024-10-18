import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./login/page"; // Import the login page as LoginPage
import PublicPage from "./public/page"; // Import the public page as PublicPage

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Make sure the correct component is referenced here */}
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/public" element={<PublicPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
