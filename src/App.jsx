import React from "react";
import PreviewPage from "./pages/PreviewPage.jsx";
import AddTrip from "./pages/AddTrip.jsx";
import EditTrip from "./pages/EditTrip.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="h-full w-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTrip />} />
        <Route path="/edit/:id" element={<EditTrip />} />
        <Route path="/preview/:id" element={<PreviewPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
