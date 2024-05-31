import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home"
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/profile" Component={Profile} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/signup" Component={Signup} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
