"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignUpPage() {
  // Track what the user types into each field
const [fullNameInput, setFullNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  // 
  const [errorMessage, setErrorMessage] = useState("");

  // 
  async function handleSignupSubmit(event: React.FormEvent) {
    // 
    event.preventDefault();

    // 
    setErrorMessage("");



    // 
    const { error: signupError } = await supabase.auth.signUp({
      email: emailInput,
      password: passwordInput,
    });

    // 
    if (signupError) {
      setErrorMessage(signupError.message);
      return;
    }

    // 
    alert("Sign up successful");
  }

  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullNameInput}
          onChange={(event) => setFullNameInput(event.target.value)}
        />
<input
          type="email"
          placeholder="Email"
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={passwordInput}
          onChange={(event) => setPasswordInput(event.target.value)}
        />

        <button type="submit">Sign Up</button>
      </form>

      {/* Only show this if theres an error to display */}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
