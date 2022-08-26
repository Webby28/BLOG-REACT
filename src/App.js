import TopBar from "./components/topbar/TopBar";
import Write from "./components/write/Write";
import Home from "./pages/home/Home";  
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <Router> 
    <TopBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/write" element={<Write/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/post/:postId" element={<Single/>} />
        </Routes>
    </Router>
  );
}

export default App;
