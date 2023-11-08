import React from "react";
import "./Weather.css";

export default function Button() {
  function comingSoon(event) {
    event.preventDefault();
    alert("Coming soon...");
  }
  return (
    <div className="Button">
      <button onClick={comingSoon}>Current Temperature</button>
    </div>
  );
}
