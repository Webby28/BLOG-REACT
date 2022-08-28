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
import Contact from "./pages/contact/Contact";

function App() {
  const user = false;
  return (    
    <Router> 
    <TopBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={user? <Home/> : <Register/>} /> //operador ternario para que envie a home si el usario es true
          <Route path="/login" element={user? <Home/> : <Login/>} />
          <Route path="/write" element={user? <Write/> : <Register/>} />
          <Route path="/settings" element={user? <Settings/> : <Register/>} />
          <Route path="/post/:postId" element={<Single/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;
