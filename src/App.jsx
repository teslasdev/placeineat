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
import Cities from "./pages/Admin/cities/Cities";
import System from "./pages/Admin/sytem/System";
import Cuisine from "./pages/Admin/cuisine/Cuisines";
import Preference from "./pages/Admin/preference/Preference";



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
          path="/page-setting/:id" 
          element={<PageSetting />} 
        />

        <Route 
          index 
          path="/status/:slug" 
          element={<Action />} 
        />

        <Route 
          index 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          index 
          path="/edit/:id" 
          element={<EditPage />} 
        />

        <Route 
          index 
          path="/login" 
          element={<Auth />} 
        />
        <Route 
          index 
          path="/manage-cities" 
          element={<Cities />} 
        />

        <Route 
          index 
          path="/manage-preference" 
          element={<Preference />} 
        />

        <Route 
          index 
          path="/manage-cuisine" 
          element={<Cuisine />} 
        />
        <Route 
          index 
          path="/system-preference" 
          element={<System />} 
        />
        
      </Routes>
    </div>
  );
}

export default App;
