import { Routes, Route } from "react-router-dom";
import Team from "./pages/Team/team";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import { ThemeProvider } from "@/components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/team" element={<Team />} />
        <Route path="/" element={<Team />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
