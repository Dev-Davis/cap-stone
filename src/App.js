import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./Components/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Profile} />
          {/* <Route exact path="/departments" Component={Departments} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
