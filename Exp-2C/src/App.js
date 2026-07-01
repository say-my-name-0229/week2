import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Click the button");

  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>React Button Click Handler</h2>
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
