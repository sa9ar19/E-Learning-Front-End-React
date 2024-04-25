import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./Pages/Home";
import { Course } from "./Pages/Course";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { Contact } from "./Pages/Contact";
import { AboutUs } from "./Pages/AboutUs";
import { PageNotFound } from "./Pages/PageNotFound";
import { CourseDescription } from "./Pages/CourseDescription";
import { Cart } from "./Pages/Cart";
import { Message } from "./components/Message";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/error" element={< PageNotFound />} />
        <Route path="/cart" element={< Cart  />} />
        <Route path="/success" element={< Message  />} />
        <Route path="/courseInfo/:courseName" element={<CourseDescription />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
