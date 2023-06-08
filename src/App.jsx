import Home from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import ResponsePage from "./pages/responsepage";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="app">
      <Routes>
        <Route
          index
          path="/"
          element={<Home input={input} onInputChange={handleInputChange} />}
        />
        <Route
          index
          path="/response"
          element={
            <ResponsePage input={input} onInputChange={handleInputChange} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
