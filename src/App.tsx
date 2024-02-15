import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const handleClick = () => {
    window.open("https://source.unsplash.com/random");
  };

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/contact">Contact</Link>
          <br />
        </BrowserRouter>
      </div>
      <div className="image-box">
        <button className="image-btn" onClick={handleClick}>
          画像取得
        </button>
      </div>
    </div>
  );
}

export default App;
