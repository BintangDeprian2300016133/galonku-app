import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import AboutUs from "./pages/aboutus";
import Feature from "./pages/feature";
import Home from "./pages/home";
import Order from "./pages/order";
import History from "./pages/history";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/history" element={<History />} />
            <Route path="/aboutus" element={<AboutUs />} />{" "}
            {/* Rute tentang kami */}
            <Route path="/feature" element={<Feature />} /> {/* Rute fitur */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
