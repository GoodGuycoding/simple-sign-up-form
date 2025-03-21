import "./styles.css";
import "./SignUp.js";

export default function App() {
  return (
    <div
      className="App"
      style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      <h1>Welcome abord!</h1>
      <h2>Click to Sign-Up or Login</h2>
      <button
        className="Sign-up-btn"
        style={{ display: "block", marginBottom: "20px", padding: "10px" }}
      >
        Sign Up
      </button>
      <button
        className="Login-btn"
        style={{ display: "block", padding: "10px" }}
      >
        Login
      </button>
    </div>
  );
}
