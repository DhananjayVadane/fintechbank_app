import React from "react";
import NewsletterFooter from "./NewsletterFooter";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavHeader from "./NavHeader"; // Import your DropdownMenu component
import Userlogin from "./Userlogin"; // Import your Userlogin component
import AccountOpen from "./AccountOpen";
import ChatboxSupport from "./ChatboxSupport";
import CustomerLogin from "./CustomerLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Router wraps all the routes */}
    <Router>
      {/* Include the navigation header across all pages */}
      <NavHeader />

      {/* Define Routes */}
      <Routes>
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/accountopen" element={<AccountOpen />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ChatboxSupport" element={<ChatboxSupport />} />
        <Route path="/CustomerLogin" element={<CustomerLogin />} />
      </Routes>
    </Router>
    <NewsletterFooter />
  </React.StrictMode>
);
