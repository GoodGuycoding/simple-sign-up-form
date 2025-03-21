import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmitForm(event) {
    event.preventDefault();
    console.log(email);
  }
  return (
    <div className="SignUp">
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input
          style={{ marginBottom: "20px" }}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          style={{ marginBottom: "20px" }}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button className="submitBtn" onClick={handleSubmitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}
