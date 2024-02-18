import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Iframe from "react-iframe";
import React from "react";

function App() {
  const [dispFrame, setDispFrame] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const handleClick = () => {
    setDispFrame(true);
    const randomImageUrl = "https://source.unsplash.com/random";
    setUrl(randomImageUrl);
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
        {dispFrame && (
          <Iframe
            url={url}
            width="1080px"
            height="720px"
            id=""
            className=""
            display="block"
            position="relative"
          />
        )}
      </div>
    </div>
  );
}

export default App;
