import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './App.css'
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'
import { QueryClientProvider , QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>,
    </Router>
  </React.StrictMode>
);
