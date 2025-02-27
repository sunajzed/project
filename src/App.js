// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import AddBus from "./pages/AddBus";
// import BusDetails from "./pages/BusDetails";
// import Navbar from "./components/Navbar";

// const BASE_URL = "https://kerala-bus.onrender.com/api/owner";

// const App = () => {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   useEffect(() => {
//     localStorage.setItem("token", token);
//   }, [token]);

//   return (
//     <Router>
//       <Navbar token={token} setToken={setToken} />
//       <div>
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login setToken={setToken} />} />
//           <Route
//             path="/add-bus"
//             element={token ? <AddBus token={token} /> : <Navigate to="/login" />}
//           />
//           <Route path="/bus/:busId" element={<BusDetails token={token} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddBus from "./pages/AddBus";
import BusDetails from "./pages/BusDetails";
import Navbar from "./components/Navbar";
import "./styles/App.css";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <Router>
      <Navbar token={token} setToken={setToken} />
      <div className="container">
        <Routes>
          <Route path="/register" element={<Register setToken={setToken} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/add-bus" element={token ? <AddBus token={token} /> : <Navigate to="/login" />} />
          <Route path="/bus/:busId" element={<BusDetails token={token} />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
