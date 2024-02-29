import React from "react";

interface ResultItem {
  links: {
    html: string;
  };
  urls: {
    thumb: string;
  };
}

interface ResultsProps {
  resultData: ResultItem[];
}

const Results: React.FC<ResultsProps> = ({ resultData }) => {
  return (
    <div>
      <h1 style={{ color: "green", fontSize: "80px" }}>Resultsページ</h1>

      <div className="wrapper">
        {resultData.map((item) => (
          <a href={item.links.html} key={item.links.html}>
            <img src={item.urls.thumb} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Results;
