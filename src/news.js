import React, { useEffect, useState } from "react";
import Placeholder from "./cryptocurrency.png";
import axios from "axios";

const News = (props) => {
  const [news, setNews] = useState([]);

  useEffect(async () => {
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const response = await axios.get(
      `https://mighty-castle-46269.herokuapp.com/api/get/cryptonews/bitcoin`
    );
    console.log(response.data);
    setNews(response.data);
  }, []);

  const currencyHandler = async (k) => {
    const response = await axios.get(
      `https://mighty-castle-46269.herokuapp.com/api/get/cryptonews/${k}`
    );
    setNews(response.data);
  };
  return (
    <div>
      <div className="d-flex justify-content-between mt-4 mr-3 mb-4">
        <div className="chip" onClick={() => currencyHandler("bitcoin")}>
          Bitcoin
        </div>
        <div className="chip" onClick={() => currencyHandler("ethereum")}>
          Ethereum
        </div>
        <div className="chip" onClick={() => currencyHandler("cardano")}>
          Cardano
        </div>
      </div>
      <div className="d-flex justify-content-between mr-3 mb-4">
        <div className="chip" onClick={() => currencyHandler("ripple")}>
          Ripple
        </div>
        <div className="chip" onClick={() => currencyHandler("dogecoin")}>
          Dogecoin
        </div>
        <div className="chip" onClick={() => currencyHandler("polkadot")}>
          Polkadot
        </div>
      </div>
      <div className="mt-5 pt-3">
        {news.map((item) => (
          <a
            className="card py-2"
            style={{ cursor: "pointer" }}
            href={item.url}
            target="_blank"
          >
            <div className="row">
              <div className="col-8">
                <h6>{item.title}</h6>
                <p className="text-muted">
                  {item.description && item.description.length > 100
                    ? item.description.slice(0, 98) + "..."
                    : item.description}
                </p>
              </div>
              <div className="col-4">
                <div className="d-flex justify-content-end">
                  <img
                    src={item.urlToImage ? item.urlToImage : Placeholder}
                    width="120px"
                    height="100px"
                    style={{
                      borderRadius: "10px",
                      marginTop: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
