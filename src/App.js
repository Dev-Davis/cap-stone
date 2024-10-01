// ***** react imports ***** //
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ***** component imports ***** //
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import FriendsDisplay from "./Components/Friends/FriendsDisplay";
import FriendProfile from "./Components/Friends/FriendProfile";
import UserHats from "./Components/HatSection/UserHats";

// ***** CSS ***** //
import "./App.css";
import Account from "./Components/Account/Account";
import Settings from "./Components/Settings/Settings";

// ***** data imports ***** //
const friends = require("./data/friends.json");
const oUser = require("./data/user.json");
const hats = require("./data/hats.json");

export const AuthState = createContext();

function App() {
  // ***** varibles ***** //
  const [loggedIn, setLoggedIn] = useState(false);
  let [user, setUser] = useState(oUser[0].isLoggedIn);

  // ***** functions ***** //
  const userLogging = () => {
    setUser(!user);
  };

  const uName = oUser.find((user) => user.userId === "01");

  return (
    <div className="App">
      <AuthState.Provider value={[loggedIn, setLoggedIn]}>
        <BrowserRouter>
          <Navbar userLogging={userLogging} user={oUser} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/account" element={<Account />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route
              exact
              path="/user/:name"
              element={<Profile friends={friends} user={uName} auth={user} />}
            />
            <Route
              exact
              path="/user/friend/:id"
              element={<FriendProfile friends={friends} />}
            />
            <Route
              exact
              path="/login"
              element={<Login userLogging={userLogging} />}
            />
            <Route exact path="/signup" element={<Signup />} />
            <Route
              exact
              path="/user/:id/all-hats"
              element={<UserHats hats={hats} user={uName} friends={friends} />}
            />
            <Route
              exact
              path="/user/:id/friends"
              element={<FriendsDisplay friends={friends} user={uName} />}
            />
          </Routes>
        </BrowserRouter>
      </AuthState.Provider>
    </div>
  );
}

export default App;
