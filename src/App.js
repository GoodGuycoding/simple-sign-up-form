import "./styles.css";
import SignUp from "./SignUp"; // Ensure this is correctly imported
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Show these buttons only on the home page */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Welcome aboard!</h1>
                <h2>Click to Sign-Up or Login</h2>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <button
                    className="Sign-up-btn"
                    style={{
                      display: "block",
                      marginBottom: "20px",
                      padding: "10px",
                    }}
                  >
                    Sign Up
                  </button>
                </Link>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button
                    className="Login-btn"
                    style={{ display: "block", padding: "10px" }}
                  >
                    Login
                  </button>
                </Link>
              </>
            }
          />
          {/* Route for the SignUp page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
