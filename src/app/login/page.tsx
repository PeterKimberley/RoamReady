"use client"

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
//
const [emailInput, setEmailInput] = useState("");
const [passwordInput, setPasswordInput] = useState("");

//
const [errorMessage, setErrorMessage] = useState("");

//
async function handleLoginSubmit(event: React.FormEvent) {
//
event.preventDefault();
//
setErrorMessage("");

 // 
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: emailInput,
      password: passwordInput,
    });

    // 
    if (loginError) {
      setErrorMessage(loginError.message);
      return;
 }

    // 
    alert("Log in successful");
  }

  return (
    <div>
      <h1>Log In</h1>

      <form onSubmit={handleLoginSubmit}>
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

        <button type="submit">Log In</button>
      </form>

      {/* Only show this if theres an error to display */}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

