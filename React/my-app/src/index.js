import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsletterFooter from "./NewsletterFooter";
import Home from "./Home";
import NavHeader from "./NavHeader"; // Import your DropdownMenu component
import Userlogin from "./Userlogin"; // Import your Userlogin component
import AccountOpen from "./AccountOpen";
import ChatboxSupport from "./ChatboxSupport";
import CustomerLogin from "./CustomerLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <NavHeader /> {/* Header appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default Route */}
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/accountopen" element={<AccountOpen />} />
        <Route path="/chatboxsupport" element={<ChatboxSupport />} />
        <Route path="/customerlogin" element={<CustomerLogin />} />
      </Routes>
      <NewsletterFooter /> {/* Footer appears on all pages */}
    </Router>
  </React.StrictMode>
);
