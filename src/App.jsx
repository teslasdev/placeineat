import Home from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import ResponsePage from "./pages/responsepage";
import { useState } from "react";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Article/Article";
import CityPage from "./pages/citypage";
import Dashboard from "./pages/Admin/Dashboard";
import Post from "./pages/Admin/Post";
import { Action, PageSetting } from "./pages/Admin/editor";

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
          element={<Home />}
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
          element={<Blog />} 
        />
        
        <Route 
          index 
          path="/article" 
          element={<Article />} 
        />

        <Route 
          index 
          path="/city" 
          element={<CityPage />} 
        />
        <Route 
          index 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          index 
          path="/post" 
          element={<Post />} 
        />

        <Route 
          index 
          path="/page-setting" 
          element={<PageSetting />} 
        />

        <Route 
          index 
          path="/status" 
          element={<Action />} 
        />

        
      </Routes>
    </div>
  );
}

export default App;
