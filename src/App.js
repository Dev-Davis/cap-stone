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

// ***** data imports ***** //
const friends = require("./data/friends.json");

function App() {
  // ***** varibles ***** //
  let [user, setUser] = useState(false);
  const id = useParams();

  // ***** functions ***** //
  const userLogging = () => {
    setUser(!user)
  }

    // ***** methods ***** //
    // const singleUser = friends.filter((x) => x.fId === '06')

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar  userLogging={userLogging} user={user} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/profile/:id" element={<FriendProfile friends={friends} />} />
          <Route exact path="/login" element={Login} />
          <Route exact path="/signup" element={Signup} />
          <Route exact path="/friends" element={<FriendsDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
