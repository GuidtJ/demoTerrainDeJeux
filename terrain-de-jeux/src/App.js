import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import ChambouleTout from "./jeux/ChambouleTout";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/jeux/chamboule-tout" element={<ChambouleTout />} />
          {/* Ajoutez d'autres routes ici */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
