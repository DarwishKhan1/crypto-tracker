import { useEffect, useState, React } from "react";
import axios from "axios";
import "./App.css";
import News from "./news";
import Graph from "./Graph";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true"
      )
      .then((res) => {
        setCoins(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    !loading && (
      <div className="coin-app">
        <div className="text-center">
          <h1>Cryptocurrencies Tracker</h1>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="coin-search">
              <h2 className="coin-text">Search a currency</h2>
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  className="coin-input"
                  onChange={handleChange}
                />
              </form>
            </div>
            <div className="mx-5">
              <table className="table ">
                <thead>
                  <tr>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>Volume</th>
                    <th>24hr</th>
                    <th>Market Cap</th>
                    <th>Last 7 days</th>
                  </tr>
                </thead>
                <tbody>
                  {filterCoins.map((item) => (
                    <tr>
                      <td>
                        <div className="coin">
                          <div className="row">
                            <div className="col-md-4">
                              <img src={item.image} />
                            </div>
                            <div className="col-md-8">
                              <h1>{item.name}</h1>
                              <p className="coin-symbol">{item.symbol}</p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.current_price}</td>
                      <td>{item.total_volume.toLocaleString()}</td>
                      <td>
                        {item.price_change_percentage_24h < 0 ? (
                          <p className="coin-percent red">
                            {item.price_change_percentage_24h.toFixed(2)}%
                          </p>
                        ) : (
                          <p className="coin-percent green">
                            {item.price_change_percentage_24h.toFixed(2)}%
                          </p>
                        )}
                      </td>
                      <td>{item.market_cap.toLocaleString()}</td>
                      <td>
                        <div className="coin-graph">
                          <Graph pointData={item.sparkline_in_7d.price} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-4">
            <div className="news">
              <News />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default App;
