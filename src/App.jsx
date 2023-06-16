import Home from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import ResponsePage from "./pages/responsepage";
import { useState } from "react";
import Blog from "./pages/Blog/Blog";

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
        <Route
          index
          path="/blog"
          element={
            <Blog />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
