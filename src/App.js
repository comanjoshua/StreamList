/*
  Course: INT-499 Capstone in Information Technology
  Instructor: John Russel
  Joshua Coman
*/


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import StreamList from "./StreamList";

// Placeholder components for future pages
function Movies() {
  return <h2 style={{ marginTop: '100px', textAlign: 'center' }}>Movies Page (Week 4)</h2>;
}

function Cart() {
  return <h2 style={{ marginTop: '100px', textAlign: 'center' }}>Cart Page (Week 4)</h2>;
}

function About() {
  return <h2 style={{ marginTop: '100px', textAlign: 'center' }}>About Page (Week 5)</h2>;
}

function Settings() {
  return <h2 style={{ marginTop: '100px', textAlign: 'center' }}>Settings Page</h2>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StreamList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
