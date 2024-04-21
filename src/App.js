import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from './Pages/Home';
import { Course } from './Pages/Course';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path="/courses" element={<Course />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

