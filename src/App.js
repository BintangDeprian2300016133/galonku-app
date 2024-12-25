import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Order from "./pages/order";
import History from "./pages/history";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
