import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    axios.get("/test").then((response) => setData(response.data.message));
  }, []);

  return (
    <div className="App">
      <h1>Lunch Time!!</h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App;
