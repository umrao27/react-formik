import SignupForm from "./components/SignupForm";
import SignInForm from "./components/SignInForm";
import "./App.css";

import { useState } from "react";
function App() {
  const [view, setView] = useState("signup");
  return (
    <div>
      <nav>
        <h3
          onClick={() => setView("signup")}
          style={{ color: view === "signup" ? "#fff" : "" }}>
          SIGN UP
        </h3>
        <h3
          onClick={() => setView("signin")}
          style={{ color: view === "signin" ? "#fff" : "" }}>
          SIGN IN
        </h3>
      </nav>
      {view === "signup" ? <SignupForm /> : <SignInForm />}
    </div>
  );
}

export default App;
