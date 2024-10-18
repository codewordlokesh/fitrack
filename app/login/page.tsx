// pages/index.js
import React, { useState } from "react";
import Image from "next/image";
import styles from "./SignInForm.module.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = function (e: { preventDefault: () => void; }) {
    e.preventDefault();
    // Add authentication logic here
    console.log("Login form submitted", { email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.welcomeText}>
          <h2>Welcome to FitTrack</h2>
          <p>Your journey to a healthier life starts here.</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.loginForm}>
          <h2>Sign in to account</h2>
          <p>Your journey to a healthier life starts here.</p>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <a href="#" className={styles.forgotPassword}>
              Forgot password?
            </a>
            <button type="submit" className={styles.signInButton}>
              Sign in
            </button>
          </form>
          <div className={styles.socialLogin}>
            <p>Or sign in with</p>
            <div className={styles.socialIcons}>
              <a href="#"><img src="\images\icon-facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="\images\icon-google.png" alt="Google" /></a>
              <a href="#"><img src="\images\icon-apple.png" alt="Instagram" /></a>
            </div>
          </div>
          <div className={styles.signUpPrompt}>
            <p>Don't have an account yet?</p>
            <button className={styles.signUpButton}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
