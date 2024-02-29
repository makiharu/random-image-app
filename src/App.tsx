import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Iframe from "react-iframe";
import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import axios from "axios";
import Results from "./components/Results";

function App() {
  const [dispFrame, setDispFrame] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const handleClick = () => {
    setDispFrame(true);
    const randomImageUrl = "https://source.unsplash.com/random";
    setUrl(randomImageUrl);
  };

  const [searchWord, setSearchWord] = React.useState("");
  const [resultData, setResultData] = React.useState([]);

  const getImage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .get(
        "https://api.unsplash.com/search/photos?query=cat&client_id=yiLGX71DzCdzlb0cX3grENMM_BcwurXRAvGy-mKLDTk"
        // .get('https://api.unsplash.com/search/photos?query=cat&client_id=XXXXX')
      )
      .then((res) => {
        console.log(JSON.stringify(res));
        setResultData(res.data.results.urls);
      });
  };

  return (
    <div className="App">
      <Title />
      <Form setSearchWord={setSearchWord} getImage={getImage} />
      <Results resultData={resultData} />
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
