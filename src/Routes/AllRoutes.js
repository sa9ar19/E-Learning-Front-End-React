import { Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { Course } from "../Pages/Course";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/Course" element={<Course />}></Route>
      </Routes>
    </>
  );
};
