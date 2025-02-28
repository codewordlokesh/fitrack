import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './login/page'; 
import HomePage from './home/page';

function App() {
  return (
    <BrowserRouter>  {/* Ensure the entire app is wrapped in BrowserRouter */}
      <Routes> 
        <Route path="/" element={<LoginPage />} />   {/* Use 'element' for routes in v6 */}
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
