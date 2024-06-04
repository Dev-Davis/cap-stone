// ***** react imports ***** //
import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

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
import Account from "./Components/Account/Account";
import Settings from "./Components/Settings/Settings";

// ***** data imports ***** //
const friends = require("./data/friends.json");

function App() {
  // ***** varibles ***** //
  let [user, setUser] = useState(false);

  // ***** functions ***** //
  const userLogging = () => {
    setUser(!user)
  }

    // ***** methods ***** //
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar  userLogging={userLogging} user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/profile/:id" element={<FriendProfile friends={friends} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/friends" element={<FriendsDisplay friends={friends} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
