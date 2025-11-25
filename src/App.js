import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Aqua from "./pages/Aqua";
import Karate from "./pages/Karate";
import Gym from "./pages/Gym";
import Ball from "./pages/Ball";
import Food from "./pages/FoodPage";
import Registration from "./pages/Registration";
import AllOffer from "./pages/AllOffer";
import AskPage from "./pages/AskPage";
import Login from "./pages/LogIn";
import ThanYou from "./pages/ThankYou";
import SignUp from "./pages/SignUp";
function App() {
  console.log('App loaded - checking routes');
  return (
    
    <Router>
      <Header />

      <Routes>

        <Route path="/" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aqua" element={<Aqua />} />
        <Route path="/karate" element={<Karate />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/ball" element={<Ball />} />
        <Route path="/food" element={<Food />} />
        <Route path="/registration" element={<Registration />} />
          <Route path="/AskPage" element={<AskPage />} />
                  <Route path="/logIn" element={<Login/>} />
        <Route path="/allOffer" element={<AllOffer/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/thank-you" element={<ThanYou/>}/>
      </Routes>

      <Footer />
    </Router>
    
  );
}

export default App;