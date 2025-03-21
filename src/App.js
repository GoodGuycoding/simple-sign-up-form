import "./styles.css";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

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
        <h1>Welcome abord!</h1>
        <h2>Click to Sign-Up or Login</h2>
        <button
          className="Sign-up-btn"
          style={{ display: "block", marginBottom: "20px", padding: "10px" }}
        >
          <Link to="/signup">Sign up</Link>
        </button>

        <button
          className="Login-btn"
          style={{ display: "block", padding: "10px" }}
        >
          <Link to="/login">Login</Link>
        </button>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
