import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import Info from "./pages/Info";
import Contact from "./pages/Contact";
import Example from "./pages/Example";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/info" element={<Info />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
