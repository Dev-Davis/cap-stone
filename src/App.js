// ***** react imports ***** //
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ***** component imports ***** //
import Home from "./Components/Home/Home"
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import FriendsDisplay from "./Components/Friends/FriendsDisplay";
import FriendProfile from "./Components/Friends/FriendProfile";

// ***** CSS ***** //
import "./App.css";

// ***** data imprts ***** //


function App() {
  // ***** varaibles ***** //
  let [user, setUser] = useState(false);

  // ***** functions ***** //
  const userLogging = () => {
    setUser(!user)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar  userLogging={userLogging} user={user} />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/profile" Component={Profile} />
          <Route exact path="/profile/:id" Component={FriendProfile} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/signup" Component={Signup} />
          <Route exact path="/friends" Component={FriendsDisplay} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
