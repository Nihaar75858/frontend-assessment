import LandingPage from "./pages/LandingScreen";
import LoginScreen from "./pages/LoginScreen";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
