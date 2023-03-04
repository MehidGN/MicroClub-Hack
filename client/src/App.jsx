import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import axios from "axios";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { USerProfilePage } from "./pages/Profile";

<<<<<<< HEAD
=======
axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

>>>>>>> e9c9b1626c6326915d954211064fa487dbb3389d
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/dashbord" element={<Dashboard />} />
          <Route exact path="/signIn" element={<SignIn />} />
<<<<<<< HEAD
=======
          <Route exact path="/profile" element={<USerProfilePage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
>>>>>>> e9c9b1626c6326915d954211064fa487dbb3389d
        </Routes>
      </Router>
    </div>
  );
}

export default App;
