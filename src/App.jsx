import Home from "./pages/homepage";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ResponsePage from "./pages/responsepage";
import { useState } from "react";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Article/Article";
import CityPage from "./pages/citypage";
import Dashboard from "./pages/Admin/Dashboard";
import Post from "./pages/Admin/Post";
import { Action, EditPage, PageSetting } from "./pages/Admin/editor";
import Blogs from "./pages/Admin/Blogs";
import Auth from "./pages/Admin/Auth";
import { getToken } from "./pages/helpers/components/Token";

function App() {
  const navigate = useNavigate()
  const [input, setInput] = useState("");
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const token = getToken();
  console.log(token);
  if(!token) {
    return <Auth />
  }
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
          path="/article/:slug" 
          element={<Article />} 
        />

        <Route 
          index 
          path="/city" 
          element={<CityPage />} 
        />
        <Route 
          index 
          path="/blogs" 
          element={<Blogs />} 
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

        <Route 
          index 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          index 
          path="/edit" 
          element={<EditPage />} 
        />

        <Route 
          index 
          path="/login" 
          element={<Auth />} 
        />

        
      </Routes>
    </div>
  );
}

export default App;
