import { Routes, Route } from "react-router-dom";
import Home from "./page/Home.jsx";
import Services from "./page/Services.jsx";
import About from "./page/About.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
