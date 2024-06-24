
import {  Routes, Route } from "react-router-dom";
import Team from "./pages/Team/team";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ChatApp from "./pages/chat/chatPage";
import DietPage from "./pages/Diet/diet";

function App() {
  return (
    <Routes>
    <Route path="/team" element={<Team/>} />
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/chat" element={<ChatApp/>} />
    <Route path="/Diet" element={<DietPage/>} />

    

  </Routes> );
}

export default App;