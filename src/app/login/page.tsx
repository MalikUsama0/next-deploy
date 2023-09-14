"use client";
import React, { useState } from "react";
export default function Login() {
  const [name, seName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    let userName = "usama";
    let pass = "usama123";
    if (name == userName && password == pass) {
      alert("successfully login");
    } else {
      alert("login failed");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        value={name}
        placeholder="please enter user name"
        style={{ padding: "8px", margin: "10px 0" }}
        onChange={(e) => seName(e.target.value)}
      />
      <input
        type="password"
        placeholder=" please enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "8px", margin: "10px 0" }}
      />
      <button
        style={{
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "3px",
        }}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
