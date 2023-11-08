import React from "react";
import "./Forecast.css";

export default function Forecast() {
  function notReady(event) {
    event.preventDefault();
    alert("Forecast feature is not ready yet");
  }

  return (
    <div className="Forecast">
      <a href="/" onClick={notReady}>
        See forecast
      </a>
    </div>
  );
}
